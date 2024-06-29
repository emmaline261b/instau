import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  scheduleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      content: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.scheduleForm.valid) {
      console.log('Scheduled Post:', this.scheduleForm.value);
      // Here you can send the data to your backend or service
    }
  }
}
