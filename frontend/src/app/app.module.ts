import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressBarModule,
    CommonModule,
    DragDropComponent,
    AppComponent
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())], // Reemplaza HttpClientModule aquí
})
export class AppModule {}

