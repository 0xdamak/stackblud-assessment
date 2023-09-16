import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './shared/components/users/users.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { BaseModalWrapperComponent } from './shared/components/base-modal-wrapper/base-modal-wrapper.component';
import { AddEditUserComponent } from './shared/components/add-edit-user/add-edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteUserComponent } from './shared/components/delete-user/delete-user.component';
import { InputSearchPipe } from './shared/components/users/input-search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoaderComponent,
    BaseModalWrapperComponent,
    AddEditUserComponent,
    DeleteUserComponent,
    InputSearchPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
