import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEComponent } from './login-e.component';

describe('LoginEComponent', () => {
  let component: LoginEComponent;
  let fixture: ComponentFixture<LoginEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEComponent]
    });
    fixture = TestBed.createComponent(LoginEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
