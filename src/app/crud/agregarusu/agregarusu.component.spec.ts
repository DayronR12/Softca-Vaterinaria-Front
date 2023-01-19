import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarusuComponent } from './agregarusu.component';

describe('AgregarusuComponent', () => {
  let component: AgregarusuComponent;
  let fixture: ComponentFixture<AgregarusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarusuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
