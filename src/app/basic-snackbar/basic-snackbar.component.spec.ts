import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSnackbarComponent } from './basic-snackbar.component';

describe('BasicSnackbarComponent', () => {
  let component: BasicSnackbarComponent;
  let fixture: ComponentFixture<BasicSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicSnackbarComponent]
    });
    fixture = TestBed.createComponent(BasicSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
