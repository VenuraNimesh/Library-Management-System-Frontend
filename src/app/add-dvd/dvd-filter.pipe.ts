import {Pipe, PipeTransform} from "@angular/core";
import {Dvd} from "./dvd";

@Pipe({
  name: 'dvdFilter'
})
export class DvdFilterPipe implements PipeTransform{
  transform(dvds : Dvd[], searchItem : string): Dvd[] {

    if( !dvds || !searchItem ){
      return dvds;
    }
    return dvds.filter(dvd => dvd.title.indexOf(searchItem) !== -1);
  }
}
