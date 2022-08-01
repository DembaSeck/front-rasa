import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
public menuProperties : Array<Menu>= [{
  id:'1',
  titre: 'Tableau de bord',
  icon: 'fas fa-chart-line',
  url: 'responses',
  sousMenu: [
    {
      id:'11',
      titre: 'Tableau de bord1',
      icon: '',
      url: '',
    },
    {
      id:'12',
      titre: 'Tableau de bord2',
      icon: '',
      url: '',
    },{
       id:'13',
    titre: 'Tableau de bord3',
    icon: '',
    url: '',
    }
   
  ]

},{
  id:'2',
  titre: 'Responses',
  icon: 'fas fa-chart-bar',
  url: '',
  sousMenu: [
    {
      id:'21',
      titre: 'lieux',
      icon: '',
      url: '',
    },
    {
      id:'22',
      titre: 'specialite',
      icon: '',
      url: '',
    },{
       id:'23',
    titre: 'Tableau de bord3',
    icon: '',
    url: '',
    }
   
  ]

},
{
  id:'3',
  titre: 'Lieux',
  icon: 'fas fa-chart-pie',
  url: '',
  sousMenu: [
    {
      id:'31',
      titre: 'lieux',
      icon: '',
      url: '',
    },
    {
      id:'32',
      titre: 'specialite',
      icon: '',
      url: '',
    },{
       id:'33',
    titre: 'Tableau de bord3',
    icon: '',
    url: '',
    }
   
  ]

},
{
  id:'4',
  titre: 'specialite',
  icon: 'fas fa-boxes',
  url: '',
  sousMenu: [
    {
      id:'41',
      titre: 'lieux',
      icon: '',
      url: '',
    },
    {
      id:'42',
      titre: 'specialite',
      icon: '',
      url: '',
    },{
       id:'43',
    titre: 'Tableau de bord3',
    icon: '',
    url: '',
    }
   
  ]

}
];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

navigate(url?: string): void{
this.router.navigate( [url]);
 }
}
