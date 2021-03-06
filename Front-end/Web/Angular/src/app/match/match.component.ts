import { Component, Input } from '@angular/core';
import { Match } from '../shared/match.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {

  @Input() match: Match;
}
