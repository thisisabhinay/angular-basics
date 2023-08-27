import { Component } from "@angular/core"

@Component({
  selector: "app-habit-list",
  template: `
    <ul>
      <app-habit-item
        *ngFor="let habit of habits"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent {
  test = "Habit Test Component"
  habits = [
    {
      id: "FWPRRgbusjGkrfto6YG7T",
      title: "Read a book daily",
      count: 0,
      description:
        "Read a book daily for 30 minutes or more to improve your knowledge.",
    },
    {
      id: "PcEOGC5lRXHhQGrycEndB",
      title: "Drink 2 liters of water",
      count: 0,
      description: "Drink 2 liters of water daily to stay hydrated.",
    },
    {
      id: "SkKXniE3XFs3dEF13sTZI",
      title: "Exercise at evening",
      count: 0,
      description: "Exercise daily for 30 minutes or more to stay healthy.",
    },
  ]
}
