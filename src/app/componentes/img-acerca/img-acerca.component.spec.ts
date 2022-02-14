import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAcercaComponent } from './img-acerca.component';

describe('ImgAcercaComponent', () => {
  let component: ImgAcercaComponent;
  let fixture: ComponentFixture<ImgAcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgAcercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
