import { SplashScreenPage } from './splash-screen/splash-screen.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  statusBar: any;
  SplashScreen: any;
  constructor(
    private platfrom: Platform,
    private oneSignal: OneSignal,
    private alert: AlertController
  ) {
      this.initializeApp();
    }

    initializeApp(){
      this.platfrom.ready().then(()=>{
        this.statusBar.styleDefault();
        this.SplashScreen.hide();
        this.setupOneSignal();
      });
    }

    setupOneSignal(){
      this.oneSignal.startInit(" "," ");
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

      this.oneSignal.handleNotificationReceived().
      subscribe(data=>{
        let msg = data.payload.body;
        let title = data.payload.title;
        this.showNotification(title,msg);
      })

      this.oneSignal.handleNotificationOpened().subscribe
      (data=>{
        let msg = data.notification.payload.body;
        let title = data.notification.payload.title;
        this.showNotification(title,msg);

      })

      this.oneSignal.endInit();

    }

    showNotification(title,msg){
      this.alert.create({
        header:title,
        message:msg,
        buttons:[{
          text:"OK"
        }]
      }).then((ele)=>{
        ele.present();
      })
    }
}
