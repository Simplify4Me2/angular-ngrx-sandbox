import { Component, OnInit } from '@angular/core';
import { Match } from '../shared/match.model';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match-days',
  templateUrl: './match-days.component.html',
  styleUrls: ['./match-days.component.scss']
})
export class MatchDaysComponent implements OnInit {

  matches: Match[];

  constructor(private service: MatchService) { }

  ngOnInit() {
    this.matches = this.service.get();
  }

}
