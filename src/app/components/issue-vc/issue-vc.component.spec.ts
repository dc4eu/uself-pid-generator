import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueVCComponent } from './issue-vc.component';

describe('IssueVCComponent', () => {
  let component: IssueVCComponent;
  let fixture: ComponentFixture<IssueVCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [IssueVCComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(IssueVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
