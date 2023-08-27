import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  template: `
    <main class="bg-white p-10 max-w-screen-md mt-10 mx-auto shadow-lg">
      <h1 class="text-3xl text-gray-300 font-semibold mb-4">Habits List</h1>
      <app-habit-list></app-habit-list>
    </main>
  `,
})
export class AppComponent {
  title = "angular-basics"
}
