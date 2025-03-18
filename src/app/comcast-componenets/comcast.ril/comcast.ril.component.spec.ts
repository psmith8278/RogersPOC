import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcastRilComponent } from './comcast.ril.component';

describe('ComcastRilComponent', () => {
  let component: ComcastRilComponent;
  let fixture: ComponentFixture<ComcastRilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComcastRilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComcastRilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
