// src/app/components/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;  // To store the product ID
  productDetails: any = {};  // To store the product details

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the product ID from the route parameter
    this.productId = this.route.snapshot.paramMap.get('id');
    
    // Simulate fetching product details (use actual API here)
    if (this.productId) {
      this.fetchProductDetails(this.productId);
    }
  }

  // Example method to simulate fetching product details
  fetchProductDetails(id: string): void {
    // This is a mock of the product details
    this.productDetails = {
      id: id,
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: 100,
      image: 'https://via.placeholder.com/150'
    };
  }
}
