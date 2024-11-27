import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  scrollToIdEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  scrollToId(id: string) {
    this.scrollToIdEvent.emit(id);
  }
}
