import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationenAnfordernComponent } from './informationen-anfordern.component';

describe('InformationenAnfordernComponent', () => {
  let component: InformationenAnfordernComponent;
  let fixture: ComponentFixture<InformationenAnfordernComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationenAnfordernComponent]
    });
    fixture = TestBed.createComponent(InformationenAnfordernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
