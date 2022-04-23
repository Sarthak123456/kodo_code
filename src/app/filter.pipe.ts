import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any ): any {
    if(searchTerm==null || searchTerm==undefined || searchTerm==''){
      return value;
    }
    const nameFound = value.filter((element:any) => element.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // const nameFound :any= [];
    const descriptionFound = value.filter((element:any) => element.description.toLowerCase().includes(searchTerm.toLowerCase()));
    // console.log('nameFound = ' , nameFound);
    // console.log('descriptionFound = ' , descriptionFound);


    if(nameFound.length>0){
      return nameFound
    } else if(descriptionFound.length>0){
      return descriptionFound
    }



  }

}
