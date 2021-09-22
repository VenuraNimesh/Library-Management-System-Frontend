import {Pipe, PipeTransform} from "@angular/core";
import {Book} from "../add-book/book";

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform{
    transform(books : Book[], searchItem : string): Book[] {

    if( !books || !searchItem ){
      return books;
    }
    return books.filter(book => book.title.indexOf(searchItem) !== -1);
  }
}





