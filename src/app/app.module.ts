import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { AppComponent } from 'app.component';  // Correct the typo in AppComponent import
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent  // Declare TaskComponent
  ],
  imports: [
    BrowserModule,
    CommonModule  // Add CommonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
