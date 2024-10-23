import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, OnDestroy {

  slug: string | undefined;
  producto: Producto | undefined;
  productoSub: Subscription |undefined;

  galery: Array<any> = [];
  renderGalery: Boolean = true;
  currentImg: string | undefined;

  constructor(private route: ActivatedRoute, private ProductoService: ProductoService){}
  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id']
    this.productoSub = this.ProductoService.getProduct()
      .subscribe({
        next: ( productos: Producto[] ) => {
          this.producto = productos.filter(producto => producto.slug === this.slug)[0]
          this.currentImg = this.producto.imageUrl[0];
        },
        error:(err: any) => {
          console.error('Error', err);

        }
      })
  }
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe
  }

  handleChangeImage(itemImg: string) {
      this.currentImg = itemImg
  }
}
