import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name:'uppercase',
})
export class UppercasePipe implements PipeTransform{

  transform(input: string): string {
    return input && input.toUpperCase();
  }

}