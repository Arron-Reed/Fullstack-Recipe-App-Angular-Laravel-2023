import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { ListsComponent } from './list/lists/lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FridgeRecipesComponent } from './components/fridge-recipes/fridge-recipes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { CreateListsComponent } from './list/create-list/create-lists.component';
import { RecipeSearchbarComponent } from './components/recipe-searchbar/recipe-searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    ListsComponent,
    NotFoundComponent,
    NavbarComponent,
    FridgeRecipesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CreateListsComponent,
    RecipeSearchbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
