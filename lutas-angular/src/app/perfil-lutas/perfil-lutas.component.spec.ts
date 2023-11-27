import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilLutasComponent } from './perfil-lutas.component';

describe('PerfilLutasComponent', () => {
  let component: PerfilLutasComponent;
  let fixture: ComponentFixture<PerfilLutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilLutasComponent]
    });
    fixture = TestBed.createComponent(PerfilLutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
