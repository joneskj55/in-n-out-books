/*
============================================
; Title:  book.interface.ts
; Author: Kevin Jones
; Date: 22 June 2021
; Description: Interface for Book object
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
