import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SubmitterService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
  }

  addNewValue(value: number) {
    let token = this.authService.getToken();
    if (token == null) return;
    this.firestore.collection('users').doc(token).collection('values').add({value: value}).catch((reason) => {
      alert(reason);
    }).then(() => {
      alert('Successful submit')
    });
    //this.firestore.collection('users').doc(token).collection('values').;
  }

  removeValue(id: number) {

  }

  fetchValues() {
    let returned: Array<any> = [];
    let token = this.authService.getToken();
    if (token == null) return [];
    this.firestore.collection('users').doc(token).collection('values').get().forEach((value) => {

    })
    return returned;
  }
}
