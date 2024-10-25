import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductModalComponent } from '../../components/add-product-modal/add-product-modal.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [MenuBarComponent, MenuSideComponent, FormsModule, CommonModule],
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css'],
})
export class OrderRegisterComponent {
  formData = {
    client: '',
    telefone: '',
    carro: '',
    cor: '',
    placa: '',
    observacoes: '',
  };

  responseMessage = '';

  i: number | undefined;

  constructor(private dialog: MatDialog) {}


  public servicos: Array<{ quantidade: number, descricao: string, total: number }> = [];


  public adicionarServico(): void {
    this.servicos.push({ quantidade: 0, descricao: '', total: 0 });
  }

  public removerServico(index: number): void {
  if (index !== undefined && index >= 0) {
    this.servicos.splice(index, 1);
  }
}


  public onSubmit(): void {

    console.log(this.formData);
    console.log(this.servicos);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      panelClass: 'custom-dialog',
      data: {
        client: this.formData.client,
        telefone: this.formData.telefone,
        carro: this.formData.carro,
        cor: this.formData.cor,
        placa: this.formData.placa,
        observacao: this.formData.observacoes
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.responseMessage = 'Serviço adicionado com sucesso!';
        console.log('Serviço adicionado:', result);
      } else {
        console.log('Adição de serviço cancelada.');
      }
    });
  }

}
