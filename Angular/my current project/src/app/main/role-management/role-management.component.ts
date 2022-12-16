import { Component, OnInit } from '@angular/core';
import { RolesPermissionsService } from 'src/app/services/roles-permissions.service';

@Component({
  selector: 'role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {
  allRoleList: any[] = []
  roleList: any[] = [];

  matChipProps = {
    disabled: true
  }

  constructor( private roleService: RolesPermissionsService) { }

  ngOnInit(): void {
    this.roleService.allRoles.subscribe(data=>{
      this.allRoleList = [...data]; 
      this.roleList = [...data];
    })
    // this.roleList = this.roleService.getAllRoles();
  }

  handleSearch(event: string){
    this.roleList = this.allRoleList.filter(d=>d.roleName.indexOf(event)>-1);
  }
}
