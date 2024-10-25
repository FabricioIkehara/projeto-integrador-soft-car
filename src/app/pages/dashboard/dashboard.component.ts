import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [SmallCardComponent, MenuBarComponent, MenuSideComponent, HttpClientModule],
})

export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  private readonly apiUrl: string = 'http://127.0.0.1:8000/orders/';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.http.get<Order[]>(this.apiUrl).subscribe(
      (data) => {
        this.orders = data
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 6);
      },
      (error) => {
        console.error('Erro ao carregar os pedidos:', error);
      }
    );
  }
}

