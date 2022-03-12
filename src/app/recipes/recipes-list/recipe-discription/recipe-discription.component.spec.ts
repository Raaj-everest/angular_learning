import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDiscriptionComponent } from './recipe-discription.component';

describe('RecipeDiscriptionComponent', () => {
  let component: RecipeDiscriptionComponent;
  let fixture: ComponentFixture<RecipeDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDiscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
