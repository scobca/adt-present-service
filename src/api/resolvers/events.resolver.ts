import ApiResolverUtil from "../../utils/api-resolver.util.ts";
import type {EventStructureDto} from "../dto/events/event-structure.dto.ts";

export class EventsResolver {
  private apiResolver = new ApiResolverUtil("events");

  public async getAll() {
    return await this.apiResolver.request<null, EventStructureDto[]>(
      "getAll",
      "GET",
    )
  }
}