import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";
import {Refuel} from "../refuel-list/refuel-list.component";

@Component({
  selector: 'app-refuel-edit',
  templateUrl: './refuel-edit.component.html',
  styleUrls: ['./refuel-edit.component.css']
})
export class RefuelEditComponent implements OnInit {

  refuelForm: FormGroup;
  refuel: Refuel;

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.refuel = (this.routeWithData.data) as Refuel;
    this.patchForm();
  }

  onSubmit() {
    // const text = this.textForm.get('text').value;
    // this.orginalString=text;
    // const transformation = this.transformationList.map(el => el.key).join(',');
    // const request = AppComponent.toNewRequest(text, transformation);
    // this.apiService.getTransformedText(request).subscribe(resp => {
    //   this.transformedString=resp.transformed
    //   this.openAddFileDialog();
    // });
  }

  onDeleteClick() {
    if(window.confirm('Are sure you want to delete this item ?')){
      //put your delete method logic here
      this.apiService.delRefuel(this.refuel).subscribe(resp => this.router.navigate(['/refuel']));
    }
  }

  private initForm() {
    this.refuelForm = new FormGroup({
      id: new FormControl(),
      siecStacji: new FormControl(),
      ileLitrow: new FormControl(),
      kwota: new FormControl(),
      przejazd: new FormControl()
    });
  }

  private patchForm() {
    this.refuelForm.get('id').patchValue(this.refuel.id);
    this.refuelForm.get('siecStacji').patchValue(this.refuel.siec_stacji);
    this.refuelForm.get('ileLitrow').patchValue(this.refuel.ile_litrow);
    this.refuelForm.get('kwota').patchValue(this.refuel.kwota);
    this.refuelForm.get('przejazd').patchValue(this.refuel.przejazd_id);
  }
}
