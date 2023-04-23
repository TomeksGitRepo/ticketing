import {Publisher, OrderCreatedEvent, Subjects} from '@tstickets123/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}