import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloKodoComponent } from './hello-kodo.component';

describe('HelloKodoComponent', () => {
  let component: HelloKodoComponent;
  let fixture: ComponentFixture<HelloKodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloKodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloKodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
