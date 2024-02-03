import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export default class TestService {
    private httpAPI = 'http://localhost:5296/api';
    
    constructor(private http: HttpClient) {
    }

    download(): any {
        const url = [this.httpAPI, `WeatherForecast`].url();
        return this.http.get<any>(url);
    }
}
