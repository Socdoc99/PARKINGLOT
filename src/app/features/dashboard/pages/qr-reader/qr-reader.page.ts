import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.page.html',
  styleUrls: ['./qr-reader.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QrReaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
