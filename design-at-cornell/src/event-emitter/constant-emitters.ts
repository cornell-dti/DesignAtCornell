import { EventEmitter } from './event-emitter';

export class Emitters {
  static navOpenEmitter: EventEmitter<boolean> = new EventEmitter();
}
