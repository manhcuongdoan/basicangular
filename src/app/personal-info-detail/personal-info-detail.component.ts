import { Component, OnInit } from '@angular/core';
import { PersonalInfo, PersonalInfoService } from '../personal-info.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personal-info-detail',
  templateUrl: './personal-info-detail.component.html',
  styleUrls: ['./personal-info-detail.component.css']
})
export class PersonalInfoDetailComponent implements OnInit {

  personalDetail: PersonalInfo;
  constructor(
    private route: ActivatedRoute,
    private personalinfoService: PersonalInfoService,
    private location: Location
  ) { this.getInfoDetail() }



  getInfoDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personalinfoService.getInfoDetailJson(id).subscribe((dataJson) => {
      this.personalDetail = dataJson["data"];
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {

    this.personalinfoService.updatePersonalInfoJson(this.personalDetail)
      .subscribe(
        // () => this.goBack()
        response => {
          console.log(response);
          this.goBack();
        }
        
        );
  }

  ngOnInit(): void {
  }

}
