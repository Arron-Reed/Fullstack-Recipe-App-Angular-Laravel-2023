import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchbarComponent } from './recipe-searchbar.component';

describe('RecipeSearchbarComponent', () => {
  let component: RecipeSearchbarComponent;
  let fixture: ComponentFixture<RecipeSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
