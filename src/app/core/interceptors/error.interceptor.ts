import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService ,private router:Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log('interceptando');
        return next.handle(request).pipe(catchError(err => {

            if (err.status === 401) {
                // auto logout if 401 response returned from api
                //this.authService.Logout();
                //alert('Deu certo o interceptor');

                //this.router.navigate(['/auth/login']);
                console.log(err.message); 
                console.log('não autorizado')

            } else {
                //alert('Outro erro além do não autorizado')
                console.log('Outro erro além do não autorizado')
            }

            const error = err.error.message || err.statusText;
            return throwError(error);

        }));

    }
}