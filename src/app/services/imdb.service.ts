import { Injectable } from '@angular/core';
import {Movie} from '../models/movie.model';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {RequestOptions, Headers, ResponseContentType} from "@angular/http";
import {Options} from "@angular/cli/commands/doc";

@Injectable()
export class ImdbService {

  private path = 'http://www.omdbapi.com/?t=';
  private apiKEY = 'apikey=f393a066';

  constructor(){

  }

  getByTitle(search: string) {

    let movie: Movie;

    search = search.replace(' ','+');

    this.path = 'http://www.omdbapi.com/?t=';

    this.path = this.path + search + '&' + this.apiKEY;

    return this.path;

  }


}
