import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {

  }

  open() {
    const browser = this.iab.create('http://site.com');

    browser.on('loadstop').subscribe(event => {
      browser.close();

    });

    browser.on('exit').subscribe(event => {

    });

  }

}
