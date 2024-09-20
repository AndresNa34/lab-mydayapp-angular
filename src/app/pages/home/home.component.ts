import { signal } from '@angular/core';
import { Component} from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {Task} from './../../shared/models/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
  }

  tasks = signal<Task[]>([]);

  filter = signal<'all' | 'pending' | 'completed'>('all');

}
