
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation"

  const API = {
    GET: "/api/category",
    ADD: "/api/category",
    UPDATE: "/api/category",
    DELETE: "/api/category",
  };

  const KEY = "category";
  export const useGetCategory = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddCategory = () => useAddMutation(KEY, API.ADD);
  export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteCategory = () =>useDeleteMutation(KEY, API.DELETE);