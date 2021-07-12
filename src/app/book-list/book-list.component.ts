/*
============================================
; Title:  book-list.component.ts
; Author: Kevin Jones
; Date: 22 June 2021
; Description: Book list component TS file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
// import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Array<IBook> = [];

  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe((res) => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          //@ts-ignore
          if (res[key].details.authors) {
            //@ts-ignore
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }
          this.books.push({
            //@ts-ignore
            isbn: res[key].details.isbn_13
              ? //@ts-ignore
                res[key].details.isbn_13
              : //@ts-ignore
                res[key].details.isbn_10,
            //@ts-ignore
            title: res[key].details.title,
            //@ts-ignore
            description: res[key].details.subtitle
              ? //@ts-ignore
                res[key].details.subtitle
              : 'N/A',
            //@ts-ignore
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  // show isbn, title, numOfPages, authors in console
  showBookDetails(isbn: string) {
    //@ts-ignore
    this.book = this.books.find((book) => book.isbn === isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px',
    });
    console.log(this.book);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        //@ts-ignore
        this.book = null;
      }
    });
  }
}
