import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, MatLabel, MatInputModule, MatIconModule, MatIcon, ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  registerform!: FormGroup;
  subimitted: boolean = false;
  returnurl!: string;
  message = "";
  emailmessage = "";
  private userArr: any = [];

  constructor(private formbuilder: FormBuilder) {

    this.registerform = this.formbuilder.group({
      // id: this.formbuilder.control(['', Validators.compose([Validators.required, Validators.minLength(5)])]),
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phonenumber : ['',Validators.required],
      note: ['', Validators.compose([Validators.required])]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register() {}
}
