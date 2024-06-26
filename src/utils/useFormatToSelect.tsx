const useFormatToSelect = (Data : any) => {
    const format = (data :any) => {
      if (!data) return [];

      return data.map((item :any) => ({
        value: item?.id,
        label: item?.name,
      }));
    };
  
    return format(Data);
  };
  
  export default useFormatToSelect;
  