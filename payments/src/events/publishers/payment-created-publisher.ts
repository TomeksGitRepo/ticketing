import { Subjects, Publisher, PaymentCreatedEvent } from "@tstickets123/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
