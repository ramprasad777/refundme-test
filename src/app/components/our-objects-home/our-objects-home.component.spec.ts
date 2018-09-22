import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurObjectsHomeComponent } from './our-objects-home.component';

describe('OurObjectsHomeComponent', () => {
  let component: OurObjectsHomeComponent;
  let fixture: ComponentFixture<OurObjectsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurObjectsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurObjectsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
