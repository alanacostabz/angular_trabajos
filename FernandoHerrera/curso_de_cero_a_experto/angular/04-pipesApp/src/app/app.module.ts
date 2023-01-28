import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// cambiar el locale de la app
import localEs from '@angular/common/locales/es-MX';
import localJpn from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localJpn);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule,
    VentasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
