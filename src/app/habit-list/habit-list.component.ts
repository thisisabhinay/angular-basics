import { Component } from "@angular/core"
import { FormBuilder } from "@angular/forms"
import { nanoid } from "nanoid"

@Component({
  selector: "app-habit-list",
  template: `
    <form
      [formGroup]="habitForm"
      (ngSubmit)="onSubmit(habitForm.value)"
      class="flex items-start flex-col gap-4 w-6/12"
    >
      <input
        type="text"
        formControlName="title"
        placeholder="Title"
        class="border border-solid bolder-gray-300 py-2 px-3 text-gray-800 w-full"
      />
      <textarea
        type="text"
        formControlName="description"
        placeholder="Description"
        class="border border-solid bolder-gray-300 py-2 px-3 text-gray-800 w-full"
      ></textarea>
      <div
        class="flex items-center gap-2 justify-end border-y border-solid border-gray-300 py-2 w-full mb-10"
      >
        <button
          type="reset"
          class="bg-white border border-solid border-gray-400 text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:border-solid-500 cursor-pointer outline-none py-1 px-2 text-base font-medium rounded self-end"
        >
          Reset
        </button>
        <button
          type="submit"
          class="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer outline-none border border-solid border-blue-500 py-1 px-2 text-base font-medium rounded self-end"
        >
          Add
        </button>
      </div>
    </form>
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
  habitForm: any
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

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      id: "",
      title: "",
      count: 0,
      description: "",
    })
  }

  onSubmit(newHabit: any) {
    const id = nanoid()

    newHabit.id = id
    newHabit.count = 0
    this.habits.push(newHabit)
    this.habitForm.reset()
    console.log(this.habits)
  }
}
