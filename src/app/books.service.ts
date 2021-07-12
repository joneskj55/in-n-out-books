/*
============================================
; Title:  books.service.ts
; Author: Kevin Jones
; Date: 22 June 2021
; Description: Books service file
;===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    // create an array of books
    this.books = [
      {
        isbn: '9781501111112',
        title: 'Grit',
        description:
          'Duckworth’s hypothesis that the real guarantor of success may not be inborn talent but a special blend of resilience and single-mindedness grew out of her upbringing: as a child her scientist father lovingly bemoaned the fact his daughter was ‘no genius’. Duckworth was determined to prove him wrong and spent her youth smashing through every academic barrier. As an adult she became focused on proving her theory and to find out if grit can be learned or cultivated. It was out of this that she created her own Character Lab at the University of Pennsylvania. ',
        numOfPages: 368,
        authors: ['Angela Duckworth'],
      },
      {
        isbn: '9780451524935',
        title: '1984',
        description:
          'Written more than 70 years ago, 1984 was George Orwell’s chilling prophecy about the future. And while 1984 has come and gone, his dystopian vision of a government that will do anything to control the narrative is timelier than ever...',
        numOfPages: 328,
        authors: ['George Orwell'],
      },
      {
        isbn: '9780451526342',
        title: 'Animal Farm',
        description:
          "George Orwell's timeless and timely allegorical novel—a scathing satire on a downtrodden society’s blind march towards totalitarianism.",
        numOfPages: 140,
        authors: ['George Orwell'],
      },
      {
        isbn: '9780316316965',
        title: 'The Tipping Point',
        description:
          'The tipping point is that magic moment when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire. Just as a single sick person can start an epidemic of the flu, so too can a small but precisely targeted push cause a fashion trend, the popularity of a new product, or a drop in the crime rate. This widely acclaimed bestseller, in which Malcolm Gladwell explores and brilliantly illuminates the tipping point phenomenon, is already changing the way people throughout the world think about selling products and disseminating ideas.',
        numOfPages: 301,
        authors: ['Malcolm Gladwell'],
      },
      {
        isbn: '9780062802200',
        title: 'Fascism: A Warning',
        description:
          'A personal and urgent examination of Fascism in the twentieth century and how its legacy shapes today’s world, written by one of America’s most admired public servants, the first woman to serve as U.S. secretary of state',
        numOfPages: 304,
        authors: ['Madeleine Albright'],
      },
    ];
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
