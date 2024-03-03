import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-folio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './folio.component.html'
 
})
export class FolioComponent {
[x: string]: any;

  constructor() { }
 

}
