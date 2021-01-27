import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
// import { ExponentialPipe } from './../shared/pipes/exponential';

import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
    declarations : [
        DemoComponent
    ],
    imports : [
        CommonModule,
        DemoRoutingModule,
        FormsModule,
        // ExponentialPipe
    ]
})
export class DemoModule{ }