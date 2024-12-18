import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../landing/LandingPageComponent/footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent { }
