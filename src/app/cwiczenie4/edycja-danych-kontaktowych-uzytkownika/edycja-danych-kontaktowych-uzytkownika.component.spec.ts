import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaDanychKontaktowychUzytkownikaComponent } from './edycja-danych-kontaktowych-uzytkownika.component';

describe('EdycjaDanychKontaktowychUzytkownikaComponent', () => {
  let component: EdycjaDanychKontaktowychUzytkownikaComponent;
  let fixture: ComponentFixture<EdycjaDanychKontaktowychUzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaDanychKontaktowychUzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaDanychKontaktowychUzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
