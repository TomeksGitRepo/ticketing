import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@tstickets123/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
