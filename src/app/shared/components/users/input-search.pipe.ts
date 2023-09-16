import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Pipe({
  name: 'inputSearch',
})
export class InputSearchPipe implements PipeTransform {
  transform(value: IUser[], query: string) {
    if (!value) return null;
    if (!query) return value;

    return value.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }
}
