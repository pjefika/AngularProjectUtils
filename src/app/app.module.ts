import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularProjectUtilsModule } from './lib/module/angular-project-utils.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AngularProjectUtilsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
