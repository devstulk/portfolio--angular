import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCtaComponent } from './link-cta.component';

describe('LinkCtaComponent', () => {
  let component: LinkCtaComponent;
  let fixture: ComponentFixture<LinkCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
