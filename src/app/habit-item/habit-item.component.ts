import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: "app-habit-item",
  template: `<li
    class="text-gray-700 my-2 hover:text-gray-900 cursor-pointer ease-in-out"
  >
    {{ habit.title }}
  </li>`,
  styles: [],
})
export class HabitItemComponent implements OnInit {
  @Input() habit: any

  constructor() {}

  ngOnInit(): void {}
}
