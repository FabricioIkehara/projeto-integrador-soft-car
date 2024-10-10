import { ClientsCardComponent } from './../../components/clients-card/clients-card.component';

import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ MenuBarComponent, MenuSideComponent, ClientsComponent, ClientsCardComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

}
