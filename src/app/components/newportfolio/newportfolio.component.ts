import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newportfolio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './newportfolio.component.html'
  
})
export class NewPortFolioComponent {

  constructor() { }

}
