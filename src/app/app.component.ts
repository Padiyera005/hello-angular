import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Hello world</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}

//--------------Otra forma de hacerlo---------------//

/*
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hola vecino';
}
 */