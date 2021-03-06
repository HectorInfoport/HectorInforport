import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VesselCalendarComponent } from './calendar/vessel-calendar/vessel-calendar.component';
// import { MatInputModule } from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CanvasComponent } from './canvas/canvas.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { CanvasGridComponent } from './canvas-grid/canvas-grid.component';
import { CajasComponent } from './cajas/cajas.component';

// DRAG AND DROP
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PaisesComponent } from './paises/paises.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BarcosComponent } from './barcos/barcos.component';
import { CssGridComponent } from './css-grid/css-grid.component';
import { CssGridDaysComponent } from './css-grid-days/css-grid-days.component';

// RESIZE
import { AngularResizedEventModule } from 'angular-resize-event';
import { ResizableModule } from 'angular-resizable-element';
import { ResizeElementComponent } from './resize-element/resize-element.component';
import { ModalComponent } from './resize-element/modal/modal.component';

// ANGULAR MATERIAL
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
} from '@angular/material';
import { ColRowComponent } from './vessel-component/col-row/col-row.component';
import { DragDropResizeComponent } from './vessel-component/drag-drop-resize/drag-drop-resize.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    VesselCalendarComponent,
    CanvasComponent,
    CanvasGridComponent,
    CajasComponent,
    DragComponent,
    PaisesComponent,
    NavbarComponent,
    BarcosComponent,
    CssGridComponent,
    CssGridDaysComponent,
    ResizeElementComponent,
    ModalComponent,
    ColRowComponent,
    DragDropResizeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ResizableModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    AngularResizedEventModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ScrollingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
