import { Dienst } from './../../shared/dienste/dienst';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DienstFactory } from 'src/app/shared/dienste/dienst-factory';
import { DienstService } from 'src/app/shared/dienste/dienst.service';
import { DienstFormErrorMessages } from './dienst-form-error-messages';


@Component({
  selector: 'fab-dienst-form',
  templateUrl: './dienst-form.component.html',
  styleUrls: ['./dienst-form.component.css']
})
export class DienstFormComponent implements OnInit {
  dienst = DienstFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingDienst = false;
  myDienstForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ds: DienstService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.isUpdatingDienst = true;
      this.ds.getSingle(id)
      .subscribe(dienst => {
        this.dienst = dienst;
        this.initDienst();
      });
    }
    this.initDienst();
  }

  initDienst() {
    this.myDienstForm = this.fb.group({
      id: [this.dienst.id, Validators.required],
      name: [this.dienst.name, Validators.required],
      shortdesc: [this.dienst.shortdesc, Validators.required],
      price: [this.dienst.price, Validators.required],
      image: [this.dienst.image, Validators.required],
      featured: [this.dienst.featured, Validators.required],
      longdesc: [this.dienst.longdesc, Validators.required],
    });
    this.myDienstForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of DienstFormErrorMessages) {
      const control = this.myDienstForm.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    const dienst: Dienst = DienstFactory.fromObject(this.myDienstForm.value);

    if (this.isUpdatingDienst) {
      // update or create
      this.ds.update(dienst).subscribe(res => {
        this.router.navigate(['../../../services', dienst.id], {
          relativeTo: this.route
        });
      });
    } else {
      this.ds.create(dienst).subscribe(res => {
        this.dienst = DienstFactory.empty();
        this.myDienstForm.reset(DienstFactory.empty());
      });
    }
  }
}
