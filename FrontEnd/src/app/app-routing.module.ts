import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { idText } from 'typescript';
import { AppComponent } from './app.component';
import { FridgeRecipesComponent } from './components/fridge-recipes/fridge-recipes.component';
import { ListsComponent } from './components/lists/lists.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'food-in-my-fridge', component: FridgeRecipesComponent },
  { path: 'lists/:id', component: ListsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '**', component: NotFoundComponent, data: { title: 'Oops' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
