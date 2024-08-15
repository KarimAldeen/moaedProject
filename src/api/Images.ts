
import useAddMutation from "./helper/useAddMutation"
import useAddMutationRecommended from "./helper/useAddMutationRecommended";
import useAddMutationTrendy from "./helper/useAddMutationTrendy";
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/HallImages",
    ADD: "/api/HallImages",
    UPDATE: "/api/HallImages",
    DELETE: "/api/HallImages",
  };

  const KEY = "HallImages";
  export const useGetHallImages = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddHallImages = () => useAddMutation(KEY, API.ADD);
  export const useUpdateHallImages = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteHallImages = () =>useDeleteMutation(KEY, API.DELETE);