export class Meterval {

  constructor(date: string, value: string, id: string) {
    this.date = date;
    this.value = value;
    this.id = id;
  }

  id: string;
  date: string;
  value: string;
}
