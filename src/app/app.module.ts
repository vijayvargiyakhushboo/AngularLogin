import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginPageModule} from './login-page/login-page.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageModule} from './dashboard-page/dashboard-page.module';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

import {NeedAuthGuard} from './auth.guard';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule,MatTabsModule,MatTooltipModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
//import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';



const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
  path : 'liststudent',
  component: ListStudentComponent
  },

 { 
 path: 'student/:id', 
 component: EditStudentComponent 
 },

];

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    EditStudentComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginPageModule,
    DashboardPageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule, 
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
	MatExpansionModule,
	MatProgressSpinnerModule, 
	MatMenuModule,
	MatTabsModule,
	MatTooltipModule
	

  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}