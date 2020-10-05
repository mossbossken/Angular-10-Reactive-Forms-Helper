import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let result = [];
    var keys = Object.keys(value);
    console.log(keys);

    var values = Object.values(value);
    console.log(values);
    for (var i = 0; i < keys.length; i++) {
      result.push({ key: keys[i], value: values[i] });
    }
    return result;
  }
}
