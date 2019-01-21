import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyUzytkownikaComponent } from './szczegoly-uzytkownika.component';

describe('SzczegolyUzytkownikaComponent', () => {
  let component: SzczegolyUzytkownikaComponent;
  let fixture: ComponentFixture<SzczegolyUzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzczegolyUzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzczegolyUzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
