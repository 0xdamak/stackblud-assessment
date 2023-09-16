import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  BASE_URL = `${environment.apiUrl}/users`;

  getUsers() {
    return this.http.get<IUser[]>(`${this.BASE_URL}`);
  }

  createUser(user: IUser) {
    return this.http.post(`${this.BASE_URL}`, user);
  }

  updateUser(user: IUser) {
    return this.http.patch(`${this.BASE_URL}/${user.id}`, user);
  }

  deleteUser(user: IUser) {
    return this.http.delete(`${this.BASE_URL}/${user.id}`);
  }

  constructor(private http: HttpClient) {}
}
