import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasExternasComponent } from './areas-externas.component';

describe('AreasExternasComponent', () => {
  let component: AreasExternasComponent;
  let fixture: ComponentFixture<AreasExternasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasExternasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
