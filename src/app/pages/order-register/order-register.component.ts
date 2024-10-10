import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [ MenuBarComponent, MenuSideComponent],
  templateUrl: './order-register.component.html',
  styleUrl: './order-register.component.css'
})
export class OrderRegisterComponent {

}
