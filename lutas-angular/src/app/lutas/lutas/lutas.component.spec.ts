import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLutasComponent } from './lutas.component';

describe('AllLutasComponent', () => {
  let component: AllLutasComponent;
  let fixture: ComponentFixture<AllLutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllLutasComponent]
    });
    fixture = TestBed.createComponent(AllLutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
