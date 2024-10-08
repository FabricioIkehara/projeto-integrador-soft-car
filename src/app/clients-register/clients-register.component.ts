import { Component } from '@angular/core';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../components/menu-side/menu-side.component';

@Component({
  selector: 'app-clients-register',
  standalone: true,
  imports: [ MenuBarComponent, MenuSideComponent],
  templateUrl: './clients-register.component.html',
  styleUrl: './clients-register.component.css'
})
export class ClientsRegisterComponent {

}
