import { Pipe, PipeTransform } from "@angular/core";

// This pipe handles transformation/formatting of container image name 
@Pipe({
    name: "containerimagename",
    pure: true
})

export class ImageNamePipe implements PipeTransform{
    transform(imageName: string) {
        const splittedName = imageName.split("/");
        let image = "";
        for(let i =1; i<splittedName.length; i++){
            image += splittedName[i];
            if(i!==splittedName.length-1){
                image += "/";
            }
        }
        return image;        
    }
}