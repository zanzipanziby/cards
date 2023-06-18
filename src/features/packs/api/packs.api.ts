import { instance } from "../../../common/api/common.api";
import { FetchCardPacksRequestType } from "../types/packs.request.type";

export const packsApi = {
  fetchCardsPack(params: FetchCardPacksRequestType) {
    return instance.get<FetchCardPacksResponseType>(`/cards/pack`, {
      params: params,
    });
  },
};
