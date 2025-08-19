import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormDrivenComponent } from './template-form-driven.component';

describe('TemplateFormDrivenComponent', () => {
  let component: TemplateFormDrivenComponent;
  let fixture: ComponentFixture<TemplateFormDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
