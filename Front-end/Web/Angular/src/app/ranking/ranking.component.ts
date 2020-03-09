import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  teams: Team[] = [
    { nr: 1, name: 'Club Brugge', rankingPoints: 45 },
    { nr: 2, name: 'Antwerp', rankingPoints: 37 },
    { nr: 3, name: 'Standard de Liège', rankingPoints: 36 },
    { nr: 4, name: 'KAA Gent', rankingPoints: 35 },
    { nr: 5, name: 'Sporting Charleroi', rankingPoints: 35 },

  ]

  constructor() { }

  ngOnInit() {
  }

}
