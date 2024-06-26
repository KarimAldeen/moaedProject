
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";



export const getInitialValues = (objectToEdit?: any) => {
  console.log(objectToEdit,"objectToEdit");
  const images = objectToEdit?.images?.map((item:any)=>{
    item?.Image
  })
    console.log(images);
    
  return {
    id: objectToEdit?.id ??  "",
    "name":objectToEdit?.["Name Of Hall"] ?? null,
    "capacity":objectToEdit?.["Capacity"] ?? null,
    "price":objectToEdit?.["Rental Cost"] ?? null,
    "Hall Description":objectToEdit?.["Hall Description"] ?? null,
    "category":objectToEdit?.["category"] ?? null,
    "location":objectToEdit?.["Hall Location"] ?? null,
    "hall_image":objectToEdit?.["hall_image"] ?? null,
    "images":images?? null
  };



};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<any> => {
  // validate input  
  return Yup.object().shape({
    name: Yup.string().required(),
    capacity: Yup.number().required(),
    price: Yup.number().required(),
    // "Hall Description": Yup.string().required(),
    category: Yup.string().required(),
    location: Yup.string().required(),



  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  return data;
};

