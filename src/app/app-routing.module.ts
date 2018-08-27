/**
 * app-routing.module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routeData = {
    home: {
        tiles: [
            {
                title: {
                    type: 'products',
                    content: 'BUY MTN DEW<sup>®</sup>'
                },
                img: 'home/82794-green_dew.jpg',
                cta: 'Shop Now',
                page: 'latest'
            },
            {
                title: {
                    type: 'MTN DEW <sup>®</sup> PRESENTS',
                    content: 'Dewey Ryder'
                },
                img: 'home/70453-dewey-ryder-pod.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Products',
                    content: 'MTN DEW<sup>®</sup> Kickstart<sup>™</sup>'
                },
                img: 'home/89270-2018-kickstart-pod.jpg',
                cta: 'Learn More',
                page: 'latest'
            },
            {
                title: {
                    type: 'Programs',
                    content: 'MTN DEW<sup>®</sup> x NBA<sup>®</sup>'
                },
                img: 'home/69032-dew-nba.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'Products',
                    content: 'MTN DEW ICE<sup>™</sup>'
                },
                img: 'home/45631-thumbnail_v2.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'Products',
                    content: 'MTN DEW<sup>®</sup> LABEL SERIES'
                },
                img: 'home/44573-label-series-2018.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'MTN DEW<sup>®</sup> Presents',
                    content: 'GREEN LABEL'
                },
                img: 'home/17274-green-label-pod.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
        ],
        backdrop: {
            img: '11162-dtd.jpg',
            video: '42386-Snow_Loop_041018_v1.mp4'
        },
        title: {
            main: `DO THE DEW<sup>®</sup>`,
            sub: `Red Gerard x MTN DEW<sup>®</sup>`,
            link: {
                name: 'Watch Video',
                anchor: '',
            }
        }
    }
};


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            animation: 'home',
            ...routeData.home
        }
    },
    {path: 'product', loadChildren: 'src/app/product/product.module#ProductModule', data: {animation: 'product'}},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
