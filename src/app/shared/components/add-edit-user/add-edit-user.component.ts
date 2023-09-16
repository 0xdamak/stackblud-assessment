import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {
  @Input() user?: IUser | null;
  @Output() close = new EventEmitter();
  userForm!: FormGroup;
  error = new BehaviorSubject(false);
  error$ = this.error.asObservable();

  ngOnInit() {
    this.userForm = new FormGroup({
      fullName: new FormControl(this.user?.name ?? '', Validators.required),
      email: new FormControl(this.user?.email ?? '', [
        Validators.required,
        Validators.email,
      ]),
      role: new FormControl(this.user?.username ?? '', Validators.required),
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this.editUser();
    this.createUser();
  }

  editUser() {
    if (!this.user) {
      return;
    }
    this.error.next(false);
    const payload: IUser = {
      ...this.user,
      name: this.userForm.value.fullName,
      email: this.userForm.value.email,
      username: this.userForm.value.role,
    };
    this.usersService.updateUser(payload).subscribe(
      () => {
        this.close.emit();
      },
      () => {
        this.error.next(true);
      }
    );
  }

  createUser() {
    if (this.user) {
      return;
    }
    this.error.next(false);
    const payload: IUser = {
      id: 1000,
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
      name: this.userForm.value.fullName,
      email: this.userForm.value.email,
      username: this.userForm.value.role,
    };
    this.usersService.createUser(payload).subscribe(
      () => {
        this.close.emit();
      },
      () => {
        this.error.next(true);
      }
    );
  }

  constructor(private usersService: UsersService) {}
}
