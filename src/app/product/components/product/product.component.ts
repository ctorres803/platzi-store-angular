import {
    Component,
    Input, Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    // tslint:disable-next-line: import-spacing
    OnDestroy}
from '@angular/core';
import { Product } from 'src/app/product.model';



@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
    @Input()
    product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. constructor');
    }
    // tslint:disable-next-line: typedef
    ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);
    }

    // tslint:disable-next-line: typedef
    ngOnInit() {
        console.log('3. ngOnInint'); // en este metodo se empieza hacer llamados a servicos de datos
    }

    // tslint:disable-next-line: typedef
    ngOnDestroy() {
        console.log('4. ngOnDestroy');
    }


    // tslint:disable-next-line: typedef
    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);

    }
}
