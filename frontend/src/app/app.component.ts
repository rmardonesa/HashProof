import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, DragDropComponent]
})
export class AppComponent {
  title = 'HashProofDev';
  generatedHash: string = '';

  setHash(hash: string) {
    this.generatedHash = hash;
  }

  copyHashToClipboard() {
    if (!this.generatedHash) return;

    navigator.clipboard.writeText(this.generatedHash).then(() => {
      alert('Hash copiado al portapapeles');
    });
  }
}


