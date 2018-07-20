import { Component } from '@angular/core';
import {ImdbService} from "./services/imdb.service";
import {Movie} from "./models/movie.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public movie: Movie;

  constructor(private imdbService: ImdbService, private http: HttpClient){

  }

  onClick(data: string){

    let path = this.imdbService.getByTitle(data);

    this.http.get(path)
      .subscribe(
        data => this.movie = <Movie> data,
        (error) => console.log(error),
        () => {
          console.log(this.movie);
          //return movie;
        }
      );

  }

}
