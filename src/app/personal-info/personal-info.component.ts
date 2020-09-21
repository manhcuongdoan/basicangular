import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../personal-info.service';
import { PersonalInfo, Advertising } from '../personal-info.service';



@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  providers: [PersonalInfoService],
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  personalInfos: PersonalInfo[] = [];
  advertising: Advertising;

  constructor(private personalinfoService: PersonalInfoService) { this.getInfo(); }


  getInfo() {
    this.personalinfoService.getInfo().subscribe(pI => {
      this.personalInfos = pI.data;
      this.advertising = pI["ad"];
    });

  }

  addInfo(first_name: string, last_name: string, email: string, avatar: string): void {
    first_name = first_name.trim();
    last_name = last_name.trim();
    email = email.trim();
    avatar = avatar.trim();

    this.personalinfoService.addPersonalInfoJson({ email, first_name, last_name, avatar } as PersonalInfo)
      .subscribe(
        personalInfo => {
          // console.log(personalInfo);
          this.personalInfos.push(personalInfo);
        });
  }

  deletePersonalInfo(personalInfo: PersonalInfo): void {
    this.personalInfos = this.personalInfos.filter(pI => pI !== personalInfo)
    this.personalinfoService.deletePersonalInfoJson(personalInfo).subscribe(
      () => {
        console.log("da xoa");
      }
    );


  }


  ngOnInit(): void {
  }

}
