import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements OnInit {
  date: string = '2021/01/01';
  upperValue: string = 'abc';
  lowerValue: string = 'ABC';
  firstExample: string;
  secondExample: string;
  heroes = [
    { name: '1' },
    { name: '12' },
    { name: '13' },
    { name: '14' },
    { name: '15' },
  ];
  constructor() {}

  ngOnInit() {}
  callPhone(str: string) {
    console.log(str);
  }

  onSubmit(data: any) {
    console.log(data.value);
  }
}
