import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from 'src/app/models/user';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent {
  @Input() user!: IUser;
  @Output() cancel = new EventEmitter();
  error = new BehaviorSubject(false);
  error$ = this.error.asObservable();

  onCancel() {
    this.cancel.emit();
  }

  deleteUser() {
    this.error.next(false);
    this.usersService.deleteUser(this.user).subscribe(
      () => {
        this.onCancel();
      },
      () => {
        this.error.next(true);
      }
    );
  }
  constructor(private usersService: UsersService) {}
}
