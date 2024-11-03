import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

interface GenderResponse {
  gender: string;
  probability: number;
  count: number;
}

@Component({
  selector: 'app-gender-predictor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gender-predictor.component.html',
  styleUrls: ['./gender-predictor.component.scss']
})
export class GenderPredictorComponent {
  private http = inject(HttpClient);
  
  form = new FormGroup({
    name: new FormControl('', { nonNullable: true })
  });
  
  loading = false;
  error: string | null = null;
  result: GenderResponse | null = null;

  async predictGender() {
    if (this.form.valid) {
      this.loading = true;
      this.error = null;
      
      try {
        const request = this.http.get<GenderResponse>(`http://localhost:8080/gender?name=${this.form.value.name}`);
        this.result = await firstValueFrom(request);

      } catch (error) {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 404:
              this.error = 'Name not found in the database';
              break;
            case 0:
              this.error = 'Unable to connect to the server. Is it running?';
              break;
            case 500:
              this.error = 'Server error occurred. Please try again later.';
              break;
            default:
              this.error = 'An unexpected error occurred. Please try again.';
          }
        } else {
          this.error = 'An unexpected error occurred. Please try again.';
        }
        this.result = null;

      } finally {
        this.loading = false;
      }
    }
  }
}