import { Publisher, Subjects, TicketCreatedEvent  } from "@tstickets123/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}