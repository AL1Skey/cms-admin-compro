import Card from "@/components/code-snippet";
import SiteBreadcrumb from "@/components/site-breadcrumb";
import BasicFileUploader from "./basic-file-uploader";
import MultipleFiles from "./multiple-files";
import UploadSingleFile from "./upload-single-file";
import FileUploaderMultiple from "./file-uploader-multiple";
import FileUploaderRestrictions from "./file-uploader-restrictions";

const FileUploaderPage = () => {
  return (
    <div>
      <SiteBreadcrumb />
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1">
          <Card title="Basic File Uploader" code="">
            <BasicFileUploader />
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Card title="Multiple Files" code="">
            <MultipleFiles />
          </Card>
        </div>
        <div className="col-span-2">
          <Card title="Upload Single File" code="">
            <UploadSingleFile />
          </Card>
        </div>
        <div className="col-span-2">
          <Card title="Upload Multiple Files" code="">
            <FileUploaderMultiple />
          </Card>
        </div>
        <div className="col-span-2">
          <Card title="Upload Files with Restrictions" code="">
            <FileUploaderRestrictions />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FileUploaderPage;