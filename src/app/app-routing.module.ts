import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // this "tool bucket" has some routing tools we'll be using

// Routes is just an interface that helps you avoid typos (so you can't e.g type paht instead of path)
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } // try typing a URL like localhost:4433/foo!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // .forRoot is a way to register those routes, you only call it one time in an application, and that's why you'll normally see it at the root level of the application
  exports: [RouterModule] // now we're exporting the RouterModule, making this bucket of tools available to anyone else who imports this app-routing module; that way they don't have to import the RouterModule again, import Routes and RouterModule, and register the imports and all that fun stuff, so with exports this is a way to make the RouterModule "public"
})
export class AppRoutingModule { }
