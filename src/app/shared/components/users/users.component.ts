import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('modalState', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class UsersComponent {
  tags = ['edit', 'create', 'delete', ''] as const;
  modalDisplay: (typeof this.tags)[number] = '';
  selectedUser!: IUser | null;
  error = new BehaviorSubject(false);
  error$ = this.error.asObservable();
  users!: IUser[];
  page = 1;
  query = '';

  ngOnInit() {
    this.error.next(false);
    this.usersService.getUsers().subscribe(
      (user) => (this.users = user),
      () => {
        this.error.next(true);
      }
    );
  }

  setModalDisplay(value: (typeof this.tags)[number]) {
    this.modalDisplay = value;
  }

  editUser(user: IUser) {
    this.selectedUser = user;
    this.setModalDisplay('edit');
  }

  deleteUser(user: IUser) {
    this.selectedUser = user;
    this.setModalDisplay('delete');
  }

  closeModal() {
    this.selectedUser = null;
    this.setModalDisplay('');
  }

  constructor(private usersService: UsersService) {}
}
