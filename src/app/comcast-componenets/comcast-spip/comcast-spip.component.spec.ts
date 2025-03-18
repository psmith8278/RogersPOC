import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcastSPIPComponent } from './comcast-spip.component';

describe('ComcastSPIPComponent', () => {
  let component: ComcastSPIPComponent;
  let fixture: ComponentFixture<ComcastSPIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComcastSPIPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComcastSPIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
