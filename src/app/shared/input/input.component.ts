import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  formControl: FormControl = new FormControl();

  @Input()
  type: string = 'text';

  @Input()
  placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}