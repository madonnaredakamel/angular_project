import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpbtnComponent } from './upbtn.component';

describe('UpbtnComponent', () => {
  let component: UpbtnComponent;
  let fixture: ComponentFixture<UpbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
