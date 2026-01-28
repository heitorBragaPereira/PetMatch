import { Component } from '@angular/core';
import { SearchFilter } from './components/search-filter/search-filter';

@Component({
  selector: 'app-home',
  imports: [SearchFilter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
