import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Hitmen} from "../models/hitmen.model";
import {User} from "../../shared/models/user.model";

@Injectable()
export class HitmenService {
  private readonly apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

    getHitmen(user: User | null | undefined): Observable<Hitmen[]> {
    return this.http.get<Hitmen[]>(`${this.apiUrl}/hitmen?user_type=${user?.type}&user_id=${user?.id}`).pipe(
      map(response  => response.map(r => new Hitmen().deserialize(r))),
    );
  }

  getHitmenList(): Observable<Hitmen[]> {
    return this.http.get<Hitmen[]>(`${this.apiUrl}/hitmen/list`).pipe(
      map(response  => response.map(r => new Hitmen().deserialize(r))),
    );
  }

  deactivate(user_id: number | undefined): Observable<any> {
    return this.http.post(`${this.apiUrl}/hitmen/deactivate`, {user_id}).pipe(
      map(response => response)
    )
  }
}
