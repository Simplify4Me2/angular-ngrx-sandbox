import { Injectable } from '@angular/core';
import { Match } from './shared/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  get(): Match[] {
    return  [
      { nr: 1, homeTeam: 'FC De Kampioenen', awayTeam: 'VK Heuvel Lo', homeScore: 3, awayScore: 1 },
      { nr: 2, homeTeam: 'RSC Anderlecht', awayTeam: 'STVV', homeScore: 2, awayScore: 2 },
      { nr: 3, homeTeam: 'Zulte Waregem', awayTeam: 'Cercle Brugge', homeScore: 4, awayScore: 0 },
      { nr: 4, homeTeam: 'RC Genk', awayTeam: 'OHL', homeScore: 0, awayScore: 1 }];
  }

}
