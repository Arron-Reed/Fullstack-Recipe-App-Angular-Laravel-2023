import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListsComponent } from './create-lists.component';

describe('CreateListComponent', () => {
  let component: CreateListsComponent;
  let fixture: ComponentFixture<CreateListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
