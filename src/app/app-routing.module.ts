/**
 * app-routing.module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { VrComponent } from './vr/vr.component';

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
            img: 'home/11162-dtd.jpg',
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
    },
    sports: {
        tiles: [
            {
                title: {
                    type: 'Basketball',
                    content: 'Russell Westbrook'
                },
                img: 'sports/36221-russ.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Basketball',
                    content: 'Kyrie Irving'
                },
                img: 'sports/98711-MD_Irving_02.png',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Racing',
                    content: 'Dale Earnhardt Jr.'
                },
                img: 'sports/83433-dale.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Skateboarding',
                    content: 'Sean Malto'
                },
                img: 'sports/47587-17MD_WEBSITE-PHOTOS_MALTO_DSC4699_Pod390x345_R1.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Skateboarding',
                    content: 'Curren Caples'
                },
                img: 'sports/38714-17MD_WEBSITE PHOTOS_CURREN_5698_Pod390x345_R2.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Snowboarding',
                    content: 'Danny Davis'
                },
                img: 'sports/23308-17MD_WEBSITE PHOTOS_DANNY_2612_Pod390x345_R2.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Snowboarding',
                    content: 'Julia Marino'
                },
                img: 'sports/93421-17MD_WEBSITE-PHOTOS_JULIA_MARINO_DSC1758_Pod390x345_R1.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Skateboarding',
                    content: 'THEOTIS BEASLEY'
                },
                img: 'sports/20488-17MD_WEBSITE-PHOTOS_THEO_DSC6104_Pod390x345_R1.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Skateboarding',
                    content: 'Nick Tucker'
                },
                img: 'sports/69561-17MD_WEBSITE-PHOTOS_NICK_DSC5886_Pod390x345_R1.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Skateboarding',
                    content: 'Jordan Maxham'
                },
                img: 'sports/61349-17MD_WEBSITE PHOTOS_JORDAN_5189_Pod390x345_R2.jpg',
                cta: 'See Profile',
                page: 'latest'
            },
            {
                title: {
                    type: 'Fishing',
                    content: 'Gerald Swindle'
                },
                img: 'sports/7686-gerald.jpg',
                cta: 'See Profile',
                page: 'latest'
            }
        ],
        backdrop: {
            img: 'sports/62464-westbrook.jpg',
            video: '28729--dont_do_they_tvc_crop_02_.mp4'
        },
        title: {
            main: `DON'T DO THEY`,
            sub: `#DEWxNBA`,
            link: {
                name: 'Watch Video',
                anchor: '',
            }
        }
    },
    vr: {
        tiles: [
            {
                title: {
                    type: 'VR EXPERIENCES',
                    content: 'DEWCISION VR RACING'
                },
                img: 'vr/41605-pod_dewcision.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'VR EXPERIENCES',
                    content: 'DEW<sup>®</sup> VR Bristol'
                },
                img: 'vr/79025-pod_bristol.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'VR EXPERIENCES',
                    content: 'DEW<sup>®</sup> VR Snow'
                },
                img: 'vr/80258-5358-thumb01_vrsnow.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
            {
                title: {
                    type: 'VR EXPERIENCES',
                    content: 'DEW<sup>®</sup> VR Skate'
                },
                img: 'vr/49802-pod_skate.jpg',
                cta: 'Launch Website',
                page: 'latest'
            },
        ],
        backdrop: {
            img: 'vr/61292-lb.jpg',
            video: '97780-DEW _LABELSERIES_0321_LOOP1_2.mp4'
        },
        title: {
            main: `VR EXPERIENCES`,
            sub: `DEW<sup>®</sup> VR BEAT DROP`,
            link: {
                name: 'Launch Website',
                anchor: '',
            }
        }
    },
};


const routes: Routes = [
    {path: '', component: HomeComponent, data: {animation: 'home', index: 0, ...routeData.home}},
    {path: 'sports', component: SportsComponent, data: {animation: 'sports', index: 1, ...routeData.sports}},
    {path: 'vr', component: VrComponent, data: {animation: 'vr', index: 2, ...routeData.vr}},
    {path: 'product', loadChildren: 'src/app/product/product.module#ProductModule', data: {animation: 'product', index: 3}},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
