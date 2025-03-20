import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RilAdminComponent } from './ril-admin.component';

describe('RilAdminComponent', () => {
  let component: RilAdminComponent;
  let fixture: ComponentFixture<RilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RilAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
