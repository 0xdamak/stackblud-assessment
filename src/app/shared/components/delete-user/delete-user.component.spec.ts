import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserComponent } from './delete-user.component';
import { AppModule } from 'src/app/app.module';

describe('DeleteUserComponent', () => {
  let component: DeleteUserComponent;
  let fixture: ComponentFixture<DeleteUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserComponent],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(DeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
