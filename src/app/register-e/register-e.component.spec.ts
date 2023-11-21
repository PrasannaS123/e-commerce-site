import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEComponent } from './register-e.component';

describe('RegisterEComponent', () => {
  let component: RegisterEComponent;
  let fixture: ComponentFixture<RegisterEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterEComponent]
    });
    fixture = TestBed.createComponent(RegisterEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
