export interface ApiPaginatedRes<T> {
  page: number;
  perPage: number;
  totalPages: number;
  results: T[];
}

export interface PaginatedReqParams {
  page?: number;
  perPage?: number;
  sortBy?: SortBy;
  sortDirection?: SortDirection;
}

export interface EventRes {
  _id: string;
  title: string;
  description: string;
  event_date: Date;
  organizer: string;
}

export interface Participant {
  name: string;
  email: string;
}

export type HearedAboutUs = "Social Media" | "Friends" | "Advertisement";

export interface ParticipantInput extends Participant {
  date_of_birth: Date;
  heard_about_us: HearedAboutUs;
}

export interface ParticipantRes extends Participant {
  _id: string;
}

export interface EventDetailedRes extends Event {
  participants: ParticipantRes[];
}

type SortDirection = "desc" | "inc";

type SortBy = "event_date" | "title" | "organizer";
