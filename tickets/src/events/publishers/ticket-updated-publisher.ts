import { Publisher, Subjects, TicketUpdatedEvent  } from "@tstickets123/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}