import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {LayoutModule} from '@angular/cdk/layout';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ErrorComponent} from './pages/error/error.component';
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatInputModule} from "@angular/material/input";
import {HomeComponent} from "./pages/home/home.component";
import {MyNavComponent} from "./components/my-nav/my-nav.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {AuthGuard} from "./shared/auth.guard";
import {SubmitValueComponent} from './pages/submit-value/submit-value.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AuthService} from "./auth/auth.service";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'submit', component: SubmitValueComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
]
const firebaseOptions={
  apiKey: "AIzaSyBIELwQUv7zppnuDu9lQIxnsQbithvo4YE",
  authDomain: "orallas.firebaseapp.com",
  projectId: "orallas",
  storageBucket: "orallas.appspot.com",
  messagingSenderId: "944552293979",
  appId: "1:944552293979:web:b0eb04e81aee7dc34e717e"
};
@NgModule({
  declarations: [MyNavComponent, FooterComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    SubmitValueComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseOptions),
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    LayoutModule,
    NgbModule,
    FontAwesomeModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
