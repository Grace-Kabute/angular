import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { TreeComponent } from './tree.component';
import { CourseService } from './courses.service';
import { AuthorComponent } from './author.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    TreeComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
