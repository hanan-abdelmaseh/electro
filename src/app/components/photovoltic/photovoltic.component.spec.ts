import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotovolticComponent } from './photovoltic.component';

describe('PhotovolticComponent', () => {
  let component: PhotovolticComponent;
  let fixture: ComponentFixture<PhotovolticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotovolticComponent]
    });
    fixture = TestBed.createComponent(PhotovolticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
