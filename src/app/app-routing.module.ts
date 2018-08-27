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
                    type: 'product',
                    content: 'MTN DEW® BLACK LABEL®'
                },
                img: '66447-thumb06_blacklabel.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'product',
                    content: 'Russell Westbrook Cans'
                },
                img: '59031-87800-pod_tile_3.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'product',
                    content: 'MTN DEW® Kickstart™'
                },
                img: '6888-thumb05_kickstart.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'product',
                    content: 'MTN DEW® DEWshine™'
                },
                img: '6404-thumb04_dewshine.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'product',
                    content: 'MTN DEW® Baja Blast®'
                },
                img: '6605-thumb03_bajablast.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'Green Label® Films',
                    content: 'We Are Blood'
                },
                img: '7993-thumb01_weareblood.jpg',
                cta: 'Read More',
                page: 'latest'
            },
            {
                title: {
                    type: 'game',
                    content: 'FUEL UP FOR BATTLE'
                },
                img: '87800-pod_tile.jpg',
                cta: 'See Rewards',
                page: 'latest'
            },
            {
                title: {
                    type: 'VR Experiences',
                    content: 'Dew® VR Snow'
                },
                img: '5358-thumb01_vrsnow.jpg',
                cta: 'Read More',
                page: 'latest'
            },
            {
                title: {
                    type: 'VR Experiences',
                    content: 'Dew® VR Skate'
                },
                img: '5457-thumb02_vrskate.jpg',
                cta: 'Read More',
                page: 'latest'
            }
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
