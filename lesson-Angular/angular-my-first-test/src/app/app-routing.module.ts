import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',                             // пустий по дефолту
        component: MainComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
        // children: [
        //   {
        //     path: 'detail/:id',
        //     component: ContactsComponent,
        //   },
        // ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
