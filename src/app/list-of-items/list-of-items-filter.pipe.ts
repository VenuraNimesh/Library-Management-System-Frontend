/*
import {Pipe, PipeTransform} from "@angular/core";
import {Book} from "../add-book/book";
import {Dvd} from "../add-dvd/dvd";

@Pipe({
  name: 'listOfItemFilter'
})
export class ListOfItemsFilterPipe implements PipeTransform{
  transform(books : Book[], searchItem : string): Book[] {

    if( !books || !searchItem ){
      return books;
    }
    return books.filter(book => book.title.indexOf(searchItem) !== -1);
  }
  transform(dvds : Dvd[], searchItem : string): Dvd[] {

    if( !dvds || !searchItem ){
      return dvds;
    }
    return dvds.filter(dvd => dvd.title.indexOf(searchItem) !== -1);
  }
}

*/
