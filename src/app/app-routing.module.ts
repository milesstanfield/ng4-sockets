import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/chat' },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ChatComponent]
})
export class AppRoutingModule { }
