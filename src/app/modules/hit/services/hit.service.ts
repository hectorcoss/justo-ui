import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hit} from "../models/hit.model";
import {map} from "rxjs/operators";
import {User} from "../../shared/models/user.model";

@Injectable()
export class HitService {
  private readonly apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }

  getHits(user: User | null | undefined): Observable<Hit[]> {
    return this.http.get<Hit[]>(`${this.apiUrl}/hits?user_type=${user?.type}&user_id=${user?.id}`).pipe(
      map(response => {
        return response.map(r => new Hit().deserialize(r))
      })
    );
  }

  saveHit(hit: Hit): Observable<any> {
    return this.http.post<Hit>(`${this.apiUrl}/hits`, hit).pipe(
      map(response => response)
    )
  }

  updateJobStatus(hitId: number | undefined, statusId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/hits/status`, {hitId, statusId}).pipe(
      map(response => response)
    )
  }
}
