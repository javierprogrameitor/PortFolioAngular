import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewPortFolioComponent } from './components/newportfolio/newportfolio.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewPortFolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  title = 'Daisy';
}
