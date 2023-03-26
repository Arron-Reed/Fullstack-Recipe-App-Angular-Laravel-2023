import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { idText } from 'typescript';
import { AppComponent } from './app.component';
import { ListsComponent } from './components/lists/lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'lists/:id', component: ListsComponent },
  { path: '**', component: NotFoundComponent, data: { title: 'Oops' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
