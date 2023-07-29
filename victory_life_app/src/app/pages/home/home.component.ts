import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageData } from 'src/app/models/message';
import { ApiService } from 'src/app/services/api.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fullname: string = '';
  phone: string = '';
  message: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  messageForm = this.fb.group({
    fullName: ['', Validators.required],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
        Validators.maxLength(15),
      ],
    ],
    message: ['', Validators.required],
  });

  get getFormControl(){
    return this.messageForm.controls
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.fullname = this.messageForm.value.fullName!;
    this.phone = this.messageForm.value.phoneNumber!;
    this.message = `${this.messageForm.value.message!}\n${this.fullname}\n${
      this.phone
    }`;
    const mesageData: MessageData = {
      sender: 'vicLife',
      message: this.message,
      phone_numbers: ['233554896353'],
    };
    console.log(this.message);

    this.apiService.sendMessage(mesageData).subscribe(
      (response) => {
        console.log('Message sent ', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.messageForm.reset();
  }
}
