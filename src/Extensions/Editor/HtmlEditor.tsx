import React, { FC, useState } from "react";
// import { Editor } from '@tinymce/tinymce-react';
import { useFormikContext } from "formik";
import { 
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  BtnStyles,
  BtnLink,
  BtnRedo,
  BtnStrikeThrough,
  BtnBulletList,
  BtnClearFormatting,
  BtnUnderline,
  BtnNumberedList,
  BtnUndo,
  Toolbar,

} from 'react-simple-wysiwyg';




interface HtmlEditorProps {
  langCode: number;
  name: string;
  editorState: string;
}

const HtmlEditor: FC<HtmlEditorProps> = ({ langCode, name, editorState, ...props }) => {
  const formik = useFormikContext();
  const [value, setValue] = useState(formik.getFieldProps(name).value);

  function onChange(e:any) {
    console.log(e.target.value);
    formik.setFieldValue(name , e.target.value);
    setValue(e.target.value);
  }

  return (
    <EditorProvider>
      <Editor value={value} onChange={onChange}  dir={langCode == 2 ?"rtl":'ltr'} >
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUndo/>
          <BtnNumberedList/>
          <BtnUnderline/>
          <BtnClearFormatting/>
          <BtnBulletList/>
          <BtnStrikeThrough/>
          <BtnLink/>
          <BtnStyles/>
          <BtnRedo/>
        </Toolbar>
      </Editor>
    </EditorProvider>
    
    
  );
}

export { HtmlEditor };