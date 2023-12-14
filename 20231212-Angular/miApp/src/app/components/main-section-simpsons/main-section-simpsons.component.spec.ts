import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionSimpsonsComponent } from './main-section-simpsons.component';

describe('MainSectionSimpsonsComponent', () => {
  let component: MainSectionSimpsonsComponent;
  let fixture: ComponentFixture<MainSectionSimpsonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainSectionSimpsonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSectionSimpsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
