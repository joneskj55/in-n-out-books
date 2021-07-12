/*
============================================
; Title:  app.component.ts
; Author: Kevin Jones
; Date: 29 June 2021
; Description: App component
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'in-n-out-booksp3';
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
