import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDetalleComponent } from './videos-detalle.component';

describe('VideosDetalleComponent', () => {
  let component: VideosDetalleComponent;
  let fixture: ComponentFixture<VideosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
