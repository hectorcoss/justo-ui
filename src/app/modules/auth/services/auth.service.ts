import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {User} from "../../shared/models/user.model";

@Injectable()
export class AuthService {
  private readonly API_URL = 'http://localhost:3000';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/auth`, {user}).pipe(
      map((response: any) => {
        if (response) {
          localStorage.setItem('currentUser', JSON.stringify(response)); //token here is stored in a local storage
        }

        this.currentUserSubject.next(response);
        return response;
      })
    )
  }

  logout() {
    localStorage.removeItem('currentUser');
    const dummyUser = new User();
    this.currentUserSubject.next(dummyUser);
  }
}
