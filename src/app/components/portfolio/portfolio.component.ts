import { Component, OnInit } from '@angular/core';
import { IModal } from '../../widgets/modal/modal.interface';

const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  items: Array<IModal> = [];

  constructor() {}

  ngOnInit(): void {
    this.items.push({
      title: 'Log Cabin',
      image: 'assets/img/portfolio/cabin.png',
      description
    });
    this.items.push({
      title: 'Tasty cake',
      image: 'assets/img/portfolio/cake.png',
      description
    });
    this.items.push({
      title: 'Circus',
      image: 'assets/img/portfolio/circus.png',
      description
    });
    this.items.push({
      title: 'Game',
      image: 'assets/img/portfolio/game.png',
      description
    });
    this.items.push({
      title: 'Safe',
      image: 'assets/img/portfolio/safe.png',
      description
    });
    this.items.push({
      title: 'Subamarine',
      image: 'assets/img/portfolio/submarine.png',
      description
    });
  }
}
