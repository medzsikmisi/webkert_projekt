import {Component, OnInit} from '@angular/core';
import {SubmitterService} from "../../utils/submitter.service";
import {Meterval} from "../../models/meterval.model";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyItems: Array<Meterval> = [];
  selected: string = '';
  value: FormControl;
  selected2: Meterval;

  constructor(private submitter: SubmitterService) {
    this.value = new FormControl('', [Validators.required]);
    this.selected2 = new Meterval('', '', '');
  }

  ngOnInit(): void {
    console.log('lefut ez a szar');
    this.submitter.fetchValues()?.subscribe((res: Meterval[]) => {
      this.historyItems = res;
    })
  }

  deleteItem(selected: string) {
    if (selected === '') {
      alert('Select an item!');
      return;
    }
    this.submitter.deleteValue(selected).then(() => alert('Successful delete'));
  }

  updateItem() {
    if (this.selected2.id === '') {
      alert('Select an item!');
      return;
    }
    this.submitter.updateValue(this.selected2.id, this.value.value, this.selected2.date).then(() => alert('Successful update'));
  }
}
