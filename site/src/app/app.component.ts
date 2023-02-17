import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'jw';
  events1!: any[];
    
  events2!: any[];
  
  ngOnInit() {
      this.events1 = [
          {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.CHECK_SQUARE, color: '#FF9800'},
          {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.CHECK_SQUARE, color: '#FF9800'},
          {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.CHECK_SQUARE, color: '#FF9800'},
          {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK_SQUARE, color: '#FF9800'}
      ];

      this.events2 = [
          "2020", "2021", "2022", "2023"
      ];
  }
}
