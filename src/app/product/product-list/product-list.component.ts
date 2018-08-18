import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromProductRoot from '../reducers';
import { Product } from '../model/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, AfterViewInit {

    @ViewChild('list') listElm: ElementRef;
    @ViewChild('wrapper') wrapperElm: ElementRef;

    public list$: Observable<Product[]>;

    public listMoveDistance = 0;
    public isDragging = false;

    private wrapperWidth: number;
    private listWidth: number;
    private initialX = 0;
    private initialMovieDistance = 0;

    private max = 0; // the max that the list could move left
    private min = 0; // the min that the list could move left;

    constructor( private store: Store<fromProductRoot.State> ) {
    }

    public ngOnInit() {
        this.list$ = this.store.pipe(select(fromProductRoot.getAllProducts));
    }

    public ngAfterViewInit(): void {
        this.listWidth = this.listElm.nativeElement.offsetWidth;
        this.wrapperWidth = this.wrapperElm.nativeElement.offsetWidth;
        this.max = this.wrapperWidth - this.listWidth;
    }

    public handleSlideStartOnList( event: any ): void {
        this.isDragging = true;
        this.initialX = event.center.x;
        this.initialMovieDistance = this.listMoveDistance;
    }

    public handleSlideEndOnList( event: any ): void {
        if (this.isDragging) {
            const slideDistance = event.center.x - this.initialX;
            this.setListMoveDistance(slideDistance);
            this.isDragging = false;
        }
    }

    public handleSlideOnList( event: any ): void {
        if (this.isDragging) {
            const slideDistance = event.center.x - this.initialX;
            this.setListMoveDistance(slideDistance);
        }
    }

    private setListMoveDistance( slideDistance: number ): void {
        const listMoveDistance = this.initialMovieDistance + slideDistance;

        if (slideDistance < 0 && listMoveDistance >= this.max) {
            this.listMoveDistance = listMoveDistance;
        }

        if (slideDistance > 0 && listMoveDistance <= this.min) {
            this.listMoveDistance = listMoveDistance;
        }
    }
}
