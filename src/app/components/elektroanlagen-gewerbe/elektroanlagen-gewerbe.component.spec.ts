import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElektroanlagenGewerbeComponent } from './elektroanlagen-gewerbe.component';

describe('ElektroanlagenGewerbeComponent', () => {
  let component: ElektroanlagenGewerbeComponent;
  let fixture: ComponentFixture<ElektroanlagenGewerbeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElektroanlagenGewerbeComponent]
    });
    fixture = TestBed.createComponent(ElektroanlagenGewerbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
