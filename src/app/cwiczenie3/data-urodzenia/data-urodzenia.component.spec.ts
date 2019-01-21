import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUrodzeniaComponent } from './data-urodzenia.component';

describe('DataUrodzeniaComponent', () => {
  let component: DataUrodzeniaComponent;
  let fixture: ComponentFixture<DataUrodzeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUrodzeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUrodzeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
