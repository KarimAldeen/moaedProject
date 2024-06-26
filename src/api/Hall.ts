
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import { useToggleStatus } from "./helper/useToggleStatus";
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