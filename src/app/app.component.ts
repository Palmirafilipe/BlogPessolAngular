import { AuthService } from './service/auth.service';
import { environment } from './../environments/environment.prod';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public auth: AuthService
  ){}
}