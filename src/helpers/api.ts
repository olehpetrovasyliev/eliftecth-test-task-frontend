import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./constants";
import {
  ApiPaginatedRes,
  EventDetailedRes,
  EventRes,
  PaginatedReqParams,
  ParticipantInput,
  ParticipantRes,
} from "./types";
const instance = axios.create({ baseURL: BASE_URL });

export const getAllEvents = async (
  params: PaginatedReqParams
): Promise<AxiosResponse<ApiPaginatedRes<EventRes>>> =>
  await instance.get("/", { params });

export const getEventById = async (
  id: string
): Promise<AxiosResponse<EventDetailedRes>> =>
  await instance.get(`/events/${id}`);

export const addParticipantToEvent = async (
  id: string,
  participant: ParticipantInput
): Promise<AxiosResponse<{ message: string; participant: ParticipantRes }>> =>
  await instance.post(`/events/${id}/participants`, participant);
