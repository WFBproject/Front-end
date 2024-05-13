import { Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CONDUCTEURS } from './mock-conducteurs';
import { Conduc } from './conduc';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from './barnav/barnav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, BarnavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  liste: Conduc[] = CONDUCTEURS;
  ngOnInit() {
    console.table(this.liste);
    this.selectliste(this.liste[0]);
  }

  selectliste(conducteurs: Conduc) {
    console.log(`vous avez cliqué sur la navette de ${conducteurs.ConducName}`); 
}
}