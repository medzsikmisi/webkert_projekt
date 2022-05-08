import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseAuth: AngularFireAuth) {
  }

  async login(email: string, password: string) {
    let returned: boolean = false;
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        if (!!res.user) {
          console.log('user is not null');
          returned = true;
          let token = res.user.email;
          localStorage.setItem('token', token ?? ''.toString());
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(res.user));
        }
        return returned;
      })
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        if (!!res.user) {
          let token = res.user.email;
          localStorage.setItem('token', token ?? ''.toString());
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();
    this.firebaseAuth.signOut();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
