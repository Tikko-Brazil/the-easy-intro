import EventDetails from "@/pages/EventDetails";
import type { Route } from "./+types/event";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Event ${params.eventId} - React Router App` },
    { name: "description", content: `Event page for ${params.eventId}` },
  ];
}

export default function Event({ params }: Route.ComponentProps) {
  return <EventDetails />;
}
