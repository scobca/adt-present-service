import type {EventStructureDto} from "../events/event-structure.dto.ts";

export interface GetParticipantDto {
  id: number;
  name: string;
  competence: string;
  age: string;
  presence: boolean;
  event: EventStructureDto;
}