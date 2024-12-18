import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../landing/LandingPageComponent/footer/footer.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class PricingComponent { }