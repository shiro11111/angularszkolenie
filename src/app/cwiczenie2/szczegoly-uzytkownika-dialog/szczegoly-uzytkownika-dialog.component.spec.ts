import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyUzytkownikaDialogComponent } from './szczegoly-uzytkownika-dialog.component';

describe('SzczegolyUzytkownikaDialogComponent', () => {
  let component: SzczegolyUzytkownikaDialogComponent;
  let fixture: ComponentFixture<SzczegolyUzytkownikaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzczegolyUzytkownikaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzczegolyUzytkownikaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
