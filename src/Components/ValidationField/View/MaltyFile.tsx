import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import useFormField from "../../../Hooks/useFormField";
import { ImageBaseURL } from "../../../api/config";

const MaltyFile = ({
  name,
  label,
  onChange,
  isDisabled,
  placeholder,
  className,
  props,
}: any) => {
  const { formik, t, isError } = useFormField(name, props);

  let imageUrl = formik?.values?.[name] ?? null;
  // console.log(imageUrl);

  // Mapping formik values to fileList format
  const fileList = imageUrl
    ? imageUrl.map((file: any, index: number) => {
        let fileUrl = "";

        if (typeof file === "string") {
          fileUrl = file.replace("public", "/storage");
        }
        console.log(file instanceof File);
        
        return file instanceof File
          ? {
              uid: index,
              name: file?.name,
              status: "done",
              originFileObj: file,
            }
          : {
              uid: index,
              id: file?.id,
              name: file?.name,
              status: "done",
              url: ImageBaseURL + fileUrl || "",
              thumbUrl: ImageBaseURL + fileUrl || "",
            };
      })
    : [];

  const FilehandleChange = ({ fileList }: any) => {
    if (fileList.length === 0) {
      formik.setFieldValue(name, null);
    } else {
      formik.setFieldValue(
        name,
        fileList.map((file: any) => file?.originFileObj ?? file),
      );
    }
  };

  // Custom request function
  const customRequest = async ({ onSuccess }: any) => {
    // Perform any necessary actions before onSuccess is called
    onSuccess();
  };

  return (
    <div className="ValidationField upload_image_button">
      <label htmlFor={name} className="text">
        {t(`input.${label || name}`)}
      </label>

      <Upload
        disabled={isDisabled}
        listType="picture"
        fileList={fileList} // Using fileList instead of defaultFileList
        onChange={onChange || FilehandleChange}
        customRequest={customRequest}
        className={`${className} w-100`}
        multiple // Allow multiple files to be selected
      >
        <Button
          className={isError ? "isError w-100" : " w-100"}
          icon={<UploadOutlined />}
        >
          {t(`input.` + placeholder) ?? t("input.upload_image")}
        </Button>
        <div className="Error_color"> {isError ? "required" : ""}</div>
      </Upload>
    </div>
  );
};

export default MaltyFile;
