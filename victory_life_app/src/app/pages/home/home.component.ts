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
  iconClass: string = 'arrow-down';

  accordionItems = [
    {
      headerText: 'Trending Designs',
      content:
        'Trending ipsum dolor sit amet consectetur adipisicing elit. Neque iureadipisci nulla nostrum ut qui odit tempora porro, aspernatur asperiores totam perspiciatis eligendi aperiam deserunt distinctio quaerat eos laboriosam ratione.',
      isExpanded: false,
    },
    {
      headerText: 'Professional Team',
      content:
        'Professional ipsum dolor sit amet consectetur adipisicing elit. Neque iureadipisci nulla nostrum ut qui odit tempora porro, aspernatur asperiores totam perspiciatis eligendi aperiam deserunt distinctio quaerat eos laboriosam ratione.',
      isExpanded: false,
    },
    {
      headerText: 'Values',
      content:
        'Values ipsum dolor sit amet consectetur adipisicing elit. Neque iureadipisci nulla nostrum ut qui odit tempora porro, aspernatur asperiores totam perspiciatis eligendi aperiam deserunt distinctio quaerat eos laboriosam ratione.',
      isExpanded: false,
    },
    {
      headerText: 'Comprehensive Services',
      content:
        'Comprehensive Service ipsum dolor sit amet consectetur adipisicing elit. Neque iureadipisci nulla nostrum ut qui odit tempora porro, aspernatur asperiores totam perspiciatis eligendi aperiam deserunt distinctio quaerat eos laboriosam ratione.',
      isExpanded: false,
    },
    {
      headerText: 'Warranty',
      content:
        'Warranty ipsum dolor sit amet consectetur adipisicing elit. Neque iureadipisci nulla nostrum ut qui odit tempora porro, aspernatur asperiores totam perspiciatis eligendi aperiam deserunt distinctio quaerat eos laboriosam ratione.',
      isExpanded: false,
    },
    // Add more items as needed
  ];

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  toggleContent(index: number) {
    this.accordionItems.forEach((item, i) => {
      if (i === index) {
        item.isExpanded = !item.isExpanded;
      } else {
        item.isExpanded = false;
      }
    });
  }

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

  get getFormControl() {
    return this.messageForm.controls;
  }

  ngOnInit(): void {}

  onSubmit() {
    this.fullname = this.messageForm.value.fullName!;
    this.phone = this.messageForm.value.phoneNumber!;
    this.message = `${this.messageForm.value.message!}\n${this.fullname}\n${
      this.phone
    }`;
    const mesageData: MessageData = {
      sender: 'vicLife',
      message: this.message,
      phone_numbers: ['233249643365'],
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
