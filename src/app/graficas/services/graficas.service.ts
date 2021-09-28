import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  public base_url = environment.base_url;
  constructor(private http: HttpClient) {}

  getUsuariosRedesSociales() {
    return this.http.get(this.base_url);
  }

  getData() {
    return this.getUsuariosRedesSociales().pipe(
      delay(500),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }
}
