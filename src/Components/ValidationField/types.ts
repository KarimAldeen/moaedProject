
// export interface ValidationFieldProps {
//     name: string;
//     type?: "text" | "Select" | "DataRange" | "Date" | "Time" | "File" | "number" | "Checkbox" | "password";
//     placeholder?: string;
//     label?: string;
//     className?: string;
//     option?: any[];
//     isMulti?: boolean;
//     isDisabled?: boolean;
//     picker?: "data" | "week" | "month" | "quarter" | "year";
//     Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM";
//     onChange?: (value: any) => void;
//     Group?: boolean
//     dir?:'ltr' | "rtl"
//   }

  export interface ValidationFieldPropsText {
    name: string;
    type: "text";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
  }
  
  export interface ValidationFieldPropsSelect {
    name: string;
    type: "Select";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?:any;
    dir?:'ltr' | "rtl";
    option: any[];
    isMulti?: boolean;
    
  }
   
  export interface ValidationFieldPropsSearch{
    name: string;
    type: "Search";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl";
    option: any[];
    isMulti?: boolean;
    searchBy:string;
    loading?:boolean;
    
  }
  export interface ValidationFieldPropsDataRange {
    name: string;
    type: "DataRange";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM" | "YYYY-MM-DD HH:mm:ss.SSS";
  }
  export interface ValidationFieldPropsDate {
    name: string;
    type: "Date";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    picker?: "data" | "week" | "month" | "quarter" | "year";
    Format?: "YYYY/MM/DD" | "MM/DD" | "YYYY/MM" | "YYYY-MM-DD HH:mm:ss.SSS" | "YYYY-MM-DD HH:MM:SS";


  }
  
  export interface ValidationFieldPropsTime {
    name: string;
    type: "Time";
    label?: string;
    placeholder?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"

  }
  
  export interface ValidationFieldPropsFile {
    name: string;
    type: "File" | "MaltyFile";
    placeholder?: string;
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"

  }
  export interface ValidationFieldPropsCheckbox {
    name: string;
    type: "Checkbox";
    label?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    Group?: boolean

  }
  export interface ValidationFieldPropstext {
    name: string;
    type?: "text" | "number" | "password" | "TextArea";
    label?: string;
    className?: string;
    placeholder?: string;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
    dir?:'ltr' | "rtl"
    Group?: boolean

  }


  export type ValidationFieldProps = ValidationFieldPropsText| ValidationFieldPropsSelect| ValidationFieldPropsDataRange| ValidationFieldPropsDate| ValidationFieldPropsTime| ValidationFieldPropsFile| ValidationFieldPropsCheckbox| ValidationFieldPropstext | ValidationFieldPropsSearch;
