import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filesize"
})

export class FileSize implements PipeTransform{
    transform(bytes: number) {
        if (!+bytes) return 'n/a'
        const k = 1024
        const decimals = 3
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    
        const i = Math.floor(Math.log(bytes) / Math.log(k))
    
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
}