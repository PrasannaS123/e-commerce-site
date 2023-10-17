// search.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, filterString:  string , propName: any) {
    const result: any[] = [];
    if (!value || filterString == "" || propName == "") {
      return value;
    }
    value.forEach((dummy :any) => {
      if (dummy[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(dummy);
        
      }
    });
    return result;
      
  }
 

}
