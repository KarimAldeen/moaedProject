
import useAddMutation from "./helper/useAddMutation"
import useAddMutationRecommended from "./helper/useAddMutationRecommended";
import useAddMutationTrendy from "./helper/useAddMutationTrendy";
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/hall",
    ADD: "/api/hall",
    UPDATE: "/api/hall",
    DELETE: "/api/hall",
  };

  const KEY = "Hall";
  export const useGetHall = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddHall = () => useAddMutation(KEY, API.ADD);
  export const useUpdateHall = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteHall = () =>useDeleteMutation(KEY, API.DELETE);


  export const useAddRecommended = (params?:any) => useAddMutationRecommended(KEY);
  export const useAddTrendy = (params?:any) => useAddMutationTrendy(KEY );