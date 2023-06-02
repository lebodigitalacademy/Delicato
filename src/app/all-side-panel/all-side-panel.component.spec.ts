import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSidePanelComponent } from './all-side-panel.component';

describe('AllSidePanelComponent', () => {
  let component: AllSidePanelComponent;
  let fixture: ComponentFixture<AllSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSidePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
