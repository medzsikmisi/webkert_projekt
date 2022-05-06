import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseAuth: AngularFireAuth) {
  }

  async login(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }
}
