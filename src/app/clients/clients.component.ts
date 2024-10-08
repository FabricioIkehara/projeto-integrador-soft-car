import { ClientsCardComponent } from '../components/clients-card/clients-card.component';
import { MenuSideComponent } from '../components/menu-side/menu-side.component';
import { MenuBarComponent } from './../components/menu-bar/menu-bar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ MenuBarComponent, MenuSideComponent, ClientsCardComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

}
