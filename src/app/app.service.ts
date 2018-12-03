import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Authorization': 'did' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	email1 = 'peter@klaven';
  password1 = 'cityslicka';
API_URL  =  'http://localhost:5001/sql';
  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', { email1: email,
      password1: password
    });
  }

   postLogin(body){
    return this.http.post(`${this.API_URL}`,body,httpOptions)
  }

  getStudents(){
     const body = JSON.stringify({"fn": 'selectAll', "params": ["students"]});
      return  this.http.post(`${this.API_URL}`,body, httpOptions)
  }

  postStudent(studentData) {
    return this.http.post(`${this.API_URL}`,studentData, httpOptions)
  }

  getStudentsById(body){
      return  this.http.post(`${this.API_URL}`,body, httpOptions)
  }

  postEditStudent(editStudentData){
      return this.http.post(`${this.API_URL}`,editStudentData,httpOptions)
  }
  getRollNumber(classId){
      return  this.http.post(`${this.API_URL}`,classId, httpOptions)
  }
}