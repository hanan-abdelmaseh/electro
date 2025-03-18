import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElektromobilComponent } from './elektromobil.component';

describe('ElektromobilComponent', () => {
  let component: ElektromobilComponent;
  let fixture: ComponentFixture<ElektromobilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElektromobilComponent]
    });
    fixture = TestBed.createComponent(ElektromobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
