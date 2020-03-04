import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HttpService } from 'src/app/core/services/http.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

  view: any = 'agendar'; 
  constructor(
    private datePicker: DatePicker,
    private authService: AuthService, 
    private httpService: HttpService, 
    private common: CommonService, 
    private router: Router
    ) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  Open(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  FazerManutencao(manutencao) {
    var token = this.authService.GetUserToken(); 
    this.httpService.AgendarManutencao(manutencao, token)
    .subscribe((data) => {
      console.log(data); 
      this.common.Toast('Manutenção enviada com sucesso!!!'); 
      this.router.navigateByUrl('/baja-club')
    }, (err) => {
      
    }); 
  }
}
