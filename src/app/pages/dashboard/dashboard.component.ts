import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, MenuSideComponent, SmallCardComponent, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

}
