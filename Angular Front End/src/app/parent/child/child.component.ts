import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() FromParentData: number; //لعمليت الادخال المعلومات لكومبونبينت لهم علاقه ببعض اقوم بتحديد الاب الذي يريد ارسال البيانات الى الابن ومن ثم اكتب الكود التالي لعمليت الادخال
  @Input() Wordpress: number;
  @Input() JavaScript: number;
  @Input() Drupal: number;
  @Input() HTMLCSS: number;
  @Input() PhpMsql: number;
  @Input() PhotoShop: number;


  constructor() {}
  ngOnInit(): void {}

}
