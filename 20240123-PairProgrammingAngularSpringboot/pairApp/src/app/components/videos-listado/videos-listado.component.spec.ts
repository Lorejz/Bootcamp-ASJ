import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosListadoComponent } from './videos-listado.component';

describe('VideosListadoComponent', () => {
  let component: VideosListadoComponent;
  let fixture: ComponentFixture<VideosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
