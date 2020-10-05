import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormElementDefinitionComponent } from './new-form-element-definition.component';

describe('NewFormElementDefinitionComponent', () => {
  let component: NewFormElementDefinitionComponent;
  let fixture: ComponentFixture<NewFormElementDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormElementDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormElementDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
