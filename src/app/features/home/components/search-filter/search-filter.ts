import { Component } from '@angular/core';
import { Input } from '../../../../components/input/input';

@Component({
  selector: 'app-search-filter',
  imports: [Input],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {}
