import ApiResolverUtil from "../../utils/api-resolver.util.ts";
import type {GetParticipantDto} from "../dto/participants/get-participant.dto.ts";
import type {UpdateParticipantDto} from "../dto/participants/update-participant.dto.ts";

export class ParticipationResolver {
  private apiResolver = new ApiResolverUtil("participant")

  public async getAll(id: number) {
    const res = await this.apiResolver.request<null, GetParticipantDto[]>(
      "getAll",
      "GET"
    )

    return res.filter((el) => el.event.id === id)
  }

  public async update(data: UpdateParticipantDto) {
    return await this.apiResolver.request<UpdateParticipantDto, null>(
      "update",
      "PATCH",
      data
    )
  }
}