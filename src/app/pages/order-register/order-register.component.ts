import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductModalComponent } from '../../components/add-product-modal/add-product-modal.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuSideComponent } from '../../components/menu-side/menu-side.component';

@Component({
  selector: 'app-order-register',
  standalone: true,
  imports: [ MenuBarComponent, MenuSideComponent],
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      panelClass: 'custom-dialog',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Serviço adicionado:', result);
      } else {
        console.log('Adição de serviço cancelada.');
      }
    });
  }
}
