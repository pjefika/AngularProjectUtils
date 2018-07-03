import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectUtilsComponent } from './angular-project-utils.component';

describe('AngularProjectUtilsComponent', () => {
  let component: AngularProjectUtilsComponent;
  let fixture: ComponentFixture<AngularProjectUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProjectUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProjectUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
