import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
