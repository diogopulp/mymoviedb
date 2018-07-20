export class Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;

  constructor() {
    this.Title = '';
    this.Year = '';
    this.Rated = '';
    this.Released = '';
    this.Runtime = '';
    this.Genre = '';
    this.Director = '';
    this.Writer = '';
    this.Actors = '';
    this.Plot = '';
    this.Language = '';
    this.Country = '';
    this.Awards = '';
    this.Poster = '';
    this.Ratings = [new Rating()];
    this.Metascore = '';
    this.imdbRating = '';
    this.imdbVotes = '';
    this.imdbID = '';
    this.Type = '';
    this.DVD = '';
    this.BoxOffice = '';
    this.Production = '';
    this.Website = '';
    this.Response = '';
  }
}

class Rating {
  Source: string;
  Value: string;

  constructor() {
    this.Source = '';
    this.Value = '';
  }
}
