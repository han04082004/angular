import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { DetailComponent } from '../detail/detail.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ContentComponent, DetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit{
  constructor(private productService: ProductService){}
  ngOnInit(): void {
      this.productService.getAllData().subscribe((data) => {
        console.log(data);

      });
  }
}