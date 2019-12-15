import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtInputComponent } from './crt-input.component';

describe('CrtInputComponent', () => {
  let component: CrtInputComponent;
  let fixture: ComponentFixture<CrtInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
