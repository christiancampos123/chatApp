import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class ChatroomService {

  public chatrooms: Observable<any>;

  constructor(private db: AngularFirestore) {
    this.chatrooms = db.collection('chatRooms').valueChanges();
   }
}