import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailListComponent } from './home.component';

describe('HomeComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CocktailListComponent]
    });
    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
