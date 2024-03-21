import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantshorsParisComponent } from './etudiantshors-paris.component';

describe('EtudiantshorsParisComponent', () => {
  let component: EtudiantshorsParisComponent;
  let fixture: ComponentFixture<EtudiantshorsParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantshorsParisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantshorsParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
