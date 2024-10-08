import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from "../components/menu-bar/menu-bar.component";
import { MenuSideComponent } from "../components/menu-side/menu-side.component";
import { SmallCardComponent } from '../components/small-card/small-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.css',
  imports: [CommonModule, MenuBarComponent, MenuSideComponent, SmallCardComponent]
})
export class DashboardComponent {}
