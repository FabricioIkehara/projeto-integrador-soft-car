// dashboard.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [SmallCardComponent, MenuBarComponent, MenuSideComponent, HttpClientModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent implements OnInit {
  orders: any[] = [];
  private readonly apiUrl: string = 'http://127.0.0.1:8000/orders/';
  servicosValidos: string = '';

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


        if (this.orders.length > 0) {
          this.servicosValidos = this.orders[0].servicosValidos; // Por exemplo, pegar o servico do primeiro pedido
        }
      },
      (error) => {
        console.error('Erro ao carregar os pedidos:', error);
      }
    );
  }
}
