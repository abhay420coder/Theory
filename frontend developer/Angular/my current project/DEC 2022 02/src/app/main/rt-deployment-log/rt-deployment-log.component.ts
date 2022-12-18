import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import { CodeEditorDialogComponent } from '../utility/code-editor-dialog/code-editor-dialog.component';
import { OverlayEditorComponent } from '../utility/overlay-editor/overlay-editor.component';

@Component({
    selector: 'rt-deployment-log',
    templateUrl: './rt-deployment-log.component.html',
    styleUrls: ['./rt-deployment-log.component.scss']
})
export class RtDeploymentLogComponent implements OnInit {
    @ViewChild('fullScreen') divRef;
    id: string = "";
    deploymentId: string = "";
    serviceData: any = {};
    deploymentData: any = {};
    editorOptions = { theme: 'vs-dark', language: 'yaml', readOnly: true, tabSize: 2 };
    logData: string = "";
    logDataObs: BehaviorSubject<string> = new BehaviorSubject<string>("")
    podData: any[] = [];
    selectedPod: any = {};
    employeeDetailData: any[] = [];
    overlayEditorRef: MatDialogRef<OverlayEditorComponent>;
    textVar = {
        loading: "Fetching log data...",
        logNA: "No log available",
        loadingNewData: "Loading new Data ..."
    }
    timerRef: any;

    loading: any = {
        serviceData: true,
        deploymentData: true,
        podData: true,
        podProps: true,
        logData: true
    }
    logSizeOptions = [
        {
            label: '3MB',
            value: 3145728
        },
        {
            label: '5 MB',
            value: 5242880
        },
        {
            label: '7 MB',
            value: 7340032
        },
        {
            label: '10 MB',
            value: 10485760
        },
        {
            label: '15 MB',
            value: 15728640
        }
    ];
    sinceOptions = [
        {
            label: '10 Minutes',
            value: 600
        },
        {
            label: '15 Minutes',
            value: 900
        },
        {
            label: '30 Minutes',
            value: 1080
        },
        {
            label: '1 hour',
            value: 3600
        },
        {
            label: '3 Hours',
            value: 10800
        },
        {
            label: '6 Hours',
            value: 21600
        }
    ];
    selectedLogSize = 5242880;
    selectedLogSinceTime = 3600;
    autoScrollEnabled: boolean = true;
    canRefreshLog: boolean = false;
    logErrorCount: number = 0;          // denotes consecutive error count on log fetching
    logErrorThreshold: number = 5;      //denotes number of errors needed to disable log auto refresh

    logLoaderObs: BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor(private api: ApiService, private route: ActivatedRoute,
        private router: Router, private dialog: MatDialog) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.deploymentId = this.route.snapshot.paramMap.get('deploymentId');
        this.fetchAllData();
        // this.getDeploymentData();
        // this.getServiceData();
        this.logDataObs.subscribe(data => {
            // this.logData = data;
            if (data.length > this.logData.length && data !== this.textVar.logNA) {
                this.logData += data.slice(this.logData.length + 1, data.length);
                if (this.overlayEditorRef) {
                    this.overlayEditorRef.componentInstance.data = { logData: this.logData, loading: this.logLoaderObs };
                }
            } else {
                this.logData = data;
                if (this.overlayEditorRef) {
                    this.overlayEditorRef.componentInstance.data = { logData: this.logData, loading: this.logLoaderObs };
                }
            }
        });
    }

    ngOnDestroy(): void {
        clearInterval(this.timerRef);
    }

    onInit(editor) {
        // this.loader = false;
        editor.focus();
        editor.onDidChangeModelContent(() => {
            if (this.autoScrollEnabled) {
                editor.revealLine(editor.getModel().getLineCount());
            }
        })
        editor.onMouseWheel(data => {
            var curPosition = 0;
            if (data.deltaY < 0) {
                curPosition = editor.getVisibleRanges()[0].endLineNumber - 2;
            } else {
                curPosition = editor.getVisibleRanges()[0].endLineNumber + 3;
            }
            if (curPosition >= editor.getModel().getLineCount()) {
                this.autoScrollEnabled = true;
            } else {
                this.autoScrollEnabled = false;
            }
        })
    }

    async fetchAllData() {
        //getting deployment data
        const deploymentData: any = await this.api.postData(globalUrls.rtDeploymentRead, { "deploymentId": this.deploymentId }).toPromise();
        if (deploymentData) {
            this.deploymentData = deploymentData.payload;
            this.loading.deploymentData = false;
        }

        //getting service release data
        const serviceData: any = await this.api.postData(globalUrls.rtDeploymentHasSrRelRead, { "id": this.id }).toPromise();
        if (serviceData) {
            this.serviceData = serviceData.payload;
            this.loading.serviceData = false;

            //inject userdata fetching here
            this.fetchEmployeeInfo([serviceData.payload.deploymentLastModifiedBy.split(':')[0]]);
        }
        this.getPodData();
    }

    getPodData() {
        this.api.postData(globalUrls.podList, {
            deploymentNamespace: this.deploymentData.deploymentNamespace,
            srId: this.serviceData.srId
        }).subscribe((data: any) => {
            this.podData = data.payload;
            this.loading.podData = false;
            if (this.podData.length > 0) {
                this.selectedPod = this.podData[0];
                this.loading.podProps = false;
                // this.logDataObs.next(this.textVar.loading);
                this.getPodLog();
                this.autoRefreshPodLog();
            }
        })
    }

    getPodLog() {
        this.loading.logData = true;
        this.logLoaderObs.next(true);
        this.canRefreshLog = false;
        this.api.postData(globalUrls.podLog, {
            "deploymentNamespace": this.deploymentData.deploymentNamespace,
            "podName": this.selectedPod.name,
            "since_seconds": this.selectedLogSinceTime,
            "limit_bytes": this.selectedLogSize
        }).subscribe((data: any) => {
            this.logErrorCount = 0;
            this.canRefreshLog = true;
            this.logDataObs.next(data && data.payload !== "" ? data.payload : this.textVar.logNA);
            this.loading.logData = false;
            this.logLoaderObs.next(false);
        }, err => {
            this.logErrorCount++;
            if(this.logErrorCount >= this.logErrorThreshold){
                clearInterval(this.timerRef);
            }
            this.logDataObs.next(this.textVar.logNA);
            this.canRefreshLog = true;
            this.loading.logData = false;
            this.logLoaderObs.next(false);
        });
    }

    autoRefreshPodLog() {
        //destroy previous timer subscription
        if(this.timerRef){
            clearInterval(this.timerRef);
        }

        //create new timer subsription 
        this.timerRef = setInterval(() => {
            if (this.canRefreshLog) {
                this.getPodLog();
            }
        }, 5000);
    }

    switchPod(event: any) {
        this.loading.podProps = true;
        var selectedPod = this.podData.filter(d => d.name === event.value)[0];
        this.selectedPod = selectedPod;
        setTimeout(() => {
            this.loading.podProps = false;
        }, 1000)
        this.logDataObs.next("");
        this.logErrorCount = 0;
        this.getPodLog();
        this.autoRefreshPodLog();
    }

    navigateBack() {
        this.router.navigate(['../../../'], { relativeTo: this.route });
    }

    refreshLog() {
        this.logDataObs.next("");
        this.getPodLog();
    }

    fetchEmployeeInfo(eIdList: any[]) {
        this.api.postData(globalUrls.employeeDetailById, { employeeIdList: eIdList }).subscribe((data: any) => {
            this.employeeDetailData = data && data.payload && data.payload.list ? data.payload.list : [];
        })
    }

    getEmployeeName(eid: string) {
        const empId = eid.split(":")[0];
        const empInfo = this.employeeDetailData.filter((dt: any) => dt && dt.employeeId && dt.employeeId.toString() === empId)[0];
        return empInfo && empInfo.employeeName ? empInfo.employeeName : "Unknown";
    }

    toggleFullscreen() {
        const data = {
            logData: this.logData,
            loading: this.logLoaderObs
        }
        this.overlayEditorRef = this.dialog.open(OverlayEditorComponent, {
            'height': '100vh',
            'width': '100vw',
            'maxWidth': 'none',
            disableClose: true,
            data
        })
    }

    showFullScreen() {
        const elem = this.divRef.nativeElement;
        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        } else {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        }

    }
    showPopUp(hostIP: string, volumePaths: string) {
        window.open(`http://${hostIP}/${volumePaths}`, '', 'width=1000,height=600');
    }

    showPodDescription(pod) {
        console.log(pod)
        this.dialog.open(CodeEditorDialogComponent, {
            data: {
                title: pod.name,
                code: JSON.stringify(pod, null, '\t'),
                readOnly: true,
                language: "json"
            }
        })
    }

    updateLogConfig() {
        this.refreshLog();
    }
}
