import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../landing/LandingPageComponent/footer/footer.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = [
    { id: 1, title: 'Task 1', requirement: 'Requirement for task 1', description: 'Description for task 1', image: 'https://via.placeholder.com/250x150' },
    { id: 2, title: 'Task 2', requirement: 'Requirement for task 2', description: 'Description for task 2', image: 'https://via.placeholder.com/250x150' },
    { id: 3, title: 'Task 3', requirement: 'Requirement for task 3', description: 'Description for task 3', image: 'https://via.placeholder.com/250x150' },
    { id: 4, title: 'Task 4', requirement: 'Requirement for task 4', description: 'Description for task 4', image: 'https://via.placeholder.com/250x150' },
    { id: 5, title: 'Task 5', requirement: 'Requirement for task 5', description: 'Description for task 5', image: 'https://via.placeholder.com/250x150' },
    { id: 6, title: 'Task 6', requirement: 'Requirement for task 6', description: 'Description for task 6', image: 'https://via.placeholder.com/250x150' },
  ];

  visibleTasks = 4; // Number of visible tasks at a time
  startIndex = 0; // Start index for visible tasks

  constructor() {}

  ngOnInit(): void {}

  scrollLeft(): void {
    if (this.startIndex > 0) {
      this.startIndex -= 1;
    }
  }

  scrollRight(): void {
    if (this.startIndex < this.tasks.length - this.visibleTasks) {
      this.startIndex += 1;
    }
  }

  getVisibleTasks() {
    return this.tasks.slice(this.startIndex, this.startIndex + this.visibleTasks);
  }
}
