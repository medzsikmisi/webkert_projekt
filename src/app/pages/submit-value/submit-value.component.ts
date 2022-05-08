import {Component, OnInit} from '@angular/core';
import {faSave, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FormControl, Validators} from "@angular/forms";
import {SubmitterService} from "../../utils/submitter.service";

@Component({
  selector: 'app-submit-value',
  templateUrl: './submit-value.component.html',
  styleUrls: ['./submit-value.component.css']
})
export class SubmitValueComponent implements OnInit {
  icon: IconDefinition;
  value: FormControl;

  constructor(private submitter:SubmitterService) {
    this.value = new FormControl('', [
      Validators.nullValidator,
      Validators.required,
      Validators.min(0),
      Validators.max(999999999999)
    ]);
    this.icon = faSave;
  }

  ngOnInit(): void {
  }

  submitValue() {
this.submitter.addNewValue(69);
  }
}
