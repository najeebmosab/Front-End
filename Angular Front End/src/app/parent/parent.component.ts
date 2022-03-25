import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
    counter = 100;
    Wordprass = 80;
    JavaScript = 52;
    PhpMsql = 99;
    HTMLCSS = 89;
    Drupal = 51;
    PhotoShop = 97;
    id;
    constructor() {}

    ngOnInit(): void {}

    Change(event: string) {
        debugger;
        try {
            var input = (document.getElementById(event) as HTMLInputElement).value;
            if (parseInt(input) > -1 && parseInt(input) <= 100) {
                switch (event) {
                    case 'Wordprass':
                        this.Wordprass = parseInt(input);
                        break;
                    case 'JavaScript':
                        this.JavaScript = parseInt(input);
                        break;
                    case 'Drupal':
                        this.Drupal = parseInt(input);
                        break;
                    case 'HTMLCSS':
                        this.HTMLCSS = parseInt(input);
                        break;
                    case 'PhpMsql':
                        this.PhpMsql = parseInt(input);
                        break;
                    case 'PhotoShop':
                        this.PhotoShop = parseInt(input);
                        break;
                }
            }
            (document.getElementById(event) as HTMLInputElement).value = "";
        } catch (error) {
            console.error('Here is the error message', error);
        }

    }

}
