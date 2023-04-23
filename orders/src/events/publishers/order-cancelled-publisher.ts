import { Subjects, Publisher, OrderCancelledEvent } from "@tstickets123/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
