import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSelectModule,MatDatepickerModule, MatRadioModule, MatNativeDateModule, MatCardModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
		CommonModule,
		FormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		FlexLayoutModule,
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
		MatCardModule

  ],
  declarations: [LoginPageComponent],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }