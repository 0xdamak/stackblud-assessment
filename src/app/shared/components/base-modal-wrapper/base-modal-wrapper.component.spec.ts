import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalWrapperComponent } from './base-modal-wrapper.component';
import { AppModule } from 'src/app/app.module';

describe('BaseModalWrapperComponent', () => {
  let component: BaseModalWrapperComponent;
  let fixture: ComponentFixture<BaseModalWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseModalWrapperComponent],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(BaseModalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
