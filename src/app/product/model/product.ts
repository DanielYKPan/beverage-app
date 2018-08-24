/**
 * product
 */

export interface Product {
    id: number;
    label: {
        sub: string;
        main: string;
    };
    name: string;
    description: string;
    img: string;
    size: string;
    inform: any;
}
