import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';
import useAxios from './useAxios';
import { useTranslation } from 'react-i18next';

type AxiosResponse = {
  message: string;
  data:any ,
  success:true 
};

function useAddMutationImages(key: string): UseMutationResult<AxiosResponse, unknown, any, unknown> {
  const axios = useAxios();
  const [t] = useTranslation();
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, unknown, any, unknown>(
    async (dataToSend) => {
      console.log(dataToSend,"dataToSend");
      const { data } = await axios.post(`/api/HallImages?hall_id=${dataToSend?.id}`, dataToSend,{
        headers:{
          "Content-Type": "multipart/form-data",
        }
      });
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([key]);
        toast.success(data.message || t("Add Successful"));
      },
      onError: (error:any) => {
        const message = error?.response?.data?.message || t("failed_to_add_data");
        toast.error(message);
      }
    }
  );
}

export default useAddMutationImages;
