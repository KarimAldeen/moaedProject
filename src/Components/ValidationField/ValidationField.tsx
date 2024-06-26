import React from "react";
import "./ValidationField.scss";
import { Date, Time, File, DataRange, SelectField, Default, CheckboxField ,TextAreaField} from './View';
import { ValidationFieldProps } from "./types";
import MaltyFile from "./View/MaltyFile";
import SearchField from "./View/SearchField";

const ValidationField: React.FC<ValidationFieldProps> = ({type , ...otherProps}) => {
  
  switch (type) {
    case 'Select':
      return <SelectField {...otherProps} />;
      case 'Search':
        return <SearchField {...otherProps} />;
    case "DataRange":
      return <DataRange {...otherProps} />;
    case "Date":
      return <Date {...otherProps} />;
    case "Time":
      return <Time {...otherProps} />;
    case "File":
      return <File {...otherProps} />;
      case "MaltyFile":
        return <MaltyFile {...otherProps} />;
    case "Checkbox":
      return <CheckboxField {...otherProps} />;
      case "TextArea":
      return <TextAreaField {...otherProps} />;
    default:
      return <Default {...otherProps} type={type}/>;
  }
};

export default React.memo(ValidationField);
