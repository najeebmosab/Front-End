import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
counter = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
