import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursossComponent } from './cursoss.component';

describe('CursossComponent', () => {
  let component: CursossComponent;
  let fixture: ComponentFixture<CursossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
