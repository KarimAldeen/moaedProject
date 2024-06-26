import useAddMutation from "./helper/useAddMutation";




const KEY = "AUTH"
const API = {
    LOGIN: `/api/login`,
    LOGOUT: `/api/logout`,
  };
export const useLoginAdmin  =  ()=>useAddMutation(KEY , API.LOGIN)