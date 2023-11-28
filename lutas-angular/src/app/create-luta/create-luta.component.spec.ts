import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLutaComponent } from './create-luta.component';

describe('CreateLutaComponent', () => {
  let component: CreateLutaComponent;
  let fixture: ComponentFixture<CreateLutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLutaComponent]
    });
    fixture = TestBed.createComponent(CreateLutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
