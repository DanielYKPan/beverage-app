import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './model/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor( private http: HttpClient ) {
    }

    public listMoveDistance = 0;

    public getProducts(): Observable<Product[]> {

        // simulate a process of fetching data from API
        return this.http.get('/assets/data/products.json')
            .pipe(
                map(( res: Product[] ) => res)
            );
    }
}
