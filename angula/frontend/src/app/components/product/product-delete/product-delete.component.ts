import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productServe: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productServe.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productServe.delete(this.product.id).subscribe(() => {
      this.productServe.showMessage('Produto Excluido com Sucesso!')
      this.router.navigate(['/products'])
    })
  }
  
  cancel(): void{
    this.router.navigate(['/products'])
  }
}
