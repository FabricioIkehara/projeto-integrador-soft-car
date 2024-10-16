import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  client: string;
  carro: string;
  status: string;
}

@Component({
  selector: 'app-small-card',
  standalone: true,
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
  imports:[CommonModule]
})
export class SmallCardComponent implements OnInit {
  orders: Order[] = [];
  responseMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOrderData();
  }

  fetchOrderData() {
    this.http.get<Order[]>('/api/orders/')
      .subscribe(
        (data) => {
          this.orders = data;
        },
        (error) => {
          console.error('Erro ao buscar dados dos pedidos:', error);
          this.responseMessage = 'Erro ao carregar os dados dos pedidos.';
        }
      );
  }
}
