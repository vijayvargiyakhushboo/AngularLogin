import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSelectModule,MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ListStudentComponent } from './list-student/list-student.component';
//import { MatDatepickerModule }  from "@angular/material/datepicker";
const appRoutes: Routes =[
{
	path: '',
	redirectTo: '/',
    pathMatch: 'full'
    //component: AppComponent
},
{
	path: 'student', 
    component: StudentComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path : 'list_student',
  component: ListStudentComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    ListStudentComponent
  ],
  imports: [
  RouterModule.forRoot(
  	appRoutes,
  	{ 
  		enableTracing: true }
  	),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
