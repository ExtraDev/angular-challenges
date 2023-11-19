import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidonComponent } from './bidon.component';

describe('BidonComponent', () => {
  let component: BidonComponent;
  let fixture: ComponentFixture<BidonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
