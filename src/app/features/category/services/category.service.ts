import { updateCategory } from './../models/update-category-requenst.model';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(
      `${environment.apiBaseUrl}/api/categories`,
      model
    );
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${environment.apiBaseUrl}/api/categories`
    );
  }
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(
      `${environment.apiBaseUrl}/api/categories/${id}`
    );
  }
  updateCategory(id: string, updateCategoryRequest: updateCategory): Observable<Category>{
    return this.http.put<Category>(
      `${environment.apiBaseUrl}/api/categories/${id}`,
      updateCategoryRequest
    );
  }
}
