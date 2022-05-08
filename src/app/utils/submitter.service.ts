import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {collection, collectionData} from "@angular/fire/firestore";
import {Meterval} from "../models/meterval.model";

@Injectable({
  providedIn: 'root'
})
export class SubmitterService {

  constructor(private firestore: AngularFirestore, private authService: AuthService,) {
  }

  addNewValue(value: number) {
    let token = this.authService.getToken();
    let currentDateTime = new Date().toDateString()
    if (token == null) return;
    this.firestore.collection('users').doc(token).collection('values').add({
      value: value,
      date: currentDateTime
    }).catch((reason) => {
      alert(reason);
    }).then(() => {
      alert('Successful submit')
    });
    //this.firestore.collection('users').doc(token).collection('values').;
  }


  fetchValues(): Observable<Meterval[]> {
    let token = this.authService.getToken();
    const booksRef = collection(this.firestore.firestore, 'users/' + token + '/values');
    return collectionData(booksRef, {idField: 'id'}) as Observable<Meterval[]>;
  }

  deleteValue(selected: string) {

    return new Promise<string>(() => {
      let token = this.authService.getToken();
      this.firestore
        .collection('users/' + token + '/values')
        .doc(selected)
        .delete()
        .then(
          () => {

          },
        );

    });

  }

  updateValue(selected: string, value: string, originalDate: string) {
    console.log('selected:'+selected + ',value:'+value+',originalDate:'+originalDate);
    let token = this.authService.getToken();
    return new Promise<string>(() => {
      this.firestore.collection('users/' + token + '/values').doc(selected).update({
        date: originalDate, value: value
      })
        .then(
          () => {

          },
        );
    })
  }
}
