import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})

export class ProductoListComponent implements OnInit, OnDestroy {

productos: Producto[] = [];
productoSub: Subscription | undefined;

constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoSub = this.productoService.getProduct()
      .subscribe({
        next: ( productos: Producto[]  ) => {
          if(productos){
              this.productos = productos
          }
          console.log(this.productos)
        },
        error: ( error: any) => {
            console.log(error);
        },
        complete: () => {
            console.log('completed')
        }
      })
  }
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe;
  }
}
