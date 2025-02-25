import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @Output() hashGenerated = new EventEmitter<string>();

  uploading = false;
  generatedHash: string | null = null;
  isDragging = false;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
    event.dataTransfer!.dropEffect = 'copy';
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const file = event.dataTransfer!.files[0];
    if (file) {
      this.uploadFile(file);
    }
  }

  uploadFile(file: File) {
    if (file.type !== 'application/pdf') {
      this.snackBar.open('Solo se permiten archivos PDF', 'Cerrar', { duration: 3000 });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      this.snackBar.open('El archivo excede los 10MB permitidos', 'Cerrar', { duration: 3000 });
      return;
    }

    const container = document.querySelector('.drag-drop-container') as HTMLElement;
    container.classList.add('uploading-effect');

    this.uploading = true;
    const formData = new FormData();
    formData.append('file', file);

    this.http.post<{ hash: string }>('https://hashproof-production.up.railway.app/hashing/generate', formData).subscribe({
      next: (response) => {
        this.uploading = false;
        this.generatedHash = response.hash;
        this.hashGenerated.emit(response.hash);
        this.snackBar.open(`Hash generado con éxito`, 'Cerrar', { duration: 3000 });

        setTimeout(() => container.classList.remove('uploading-effect'), 500);
      },
      error: () => {
        this.uploading = false;
        this.snackBar.open('Error al subir el archivo', 'Cerrar', { duration: 3000 });
        container.classList.remove('uploading-effect');
      }
    });
  }

  copyHash() {
    if (this.generatedHash) {
      navigator.clipboard.writeText(this.generatedHash).then(() => {
        this.snackBar.open('Hash copiado al portapapeles', 'Cerrar', { duration: 3000 });
      });
    }
  }
}

