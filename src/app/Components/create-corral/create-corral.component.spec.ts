import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorralComponent } from './create-corral.component';

describe('CreateCorralComponent', () => {
  let component: CreateCorralComponent;
  let fixture: ComponentFixture<CreateCorralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCorralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
