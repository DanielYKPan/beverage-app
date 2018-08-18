import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor( private http: HttpClient ) {
    }

    public getProducts(): Observable<Product[]> {
        return this.http.get('/assets/data/products.json')
            .pipe(
                map((res: Product[]) => res)
            );
    }
}
