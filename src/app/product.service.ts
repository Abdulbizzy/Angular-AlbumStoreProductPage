import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Album } from './album';
import { Product } from './product';
import { Http, Response} from '@angular/http';

@Injectable()
export class ProductService {
  private _productsUrl = '../assets/products.json'
  private _albumUrl = '../assets/album.json'
constructor(private _http: Http ) { }

getAlbum(id: number): Observable<Album> {
  return this._http.get(this._albumUrl).map((response) => <Album>response.json());
}

getProducts(): Observable<Product[]> {
  return this._http.get(this._productsUrl).map((response) => <Product[]>response.json());
}
}
