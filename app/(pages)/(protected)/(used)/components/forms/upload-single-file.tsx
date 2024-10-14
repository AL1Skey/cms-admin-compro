"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface FileWithPreview extends File {
  preview: string;
}
type UploadSingleFileProps = Partial<{
  [key: string]: any;
}>;

const UploadSingleFile = ({
  edit = false,
  image="",
  ...props
}: UploadSingleFileProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [imageUrl, setImageUrl] = useState(image);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },

    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
      console.log(acceptedFiles);
    },
  });

  const img = files.map((file) => (
    <Image
      key={file.name}
      alt={file.name}
      width={1000}
      height={300}
      className="w-full h-full object-contain rounded-md"
      src={URL.createObjectURL(file)}
    />
  ));

  const imgUrlPrev = (
    <Image
      alt={image}
      width={1000}
      height={300}
      layout="fixed"
      className="w-full h-full object-contain rounded-md"
      src={image}
    />
  )

  const closeTheFile = () => {
    setFiles([]);
    setImageUrl("");
  };

  return (
    <div className={files.length ? "h-[300px] w-full" : "h-[300px] w-full"}>
      <div className={`w-full h-full relative ${files.length || imageUrl!=="" ? "" : "hidden"}`}>
        <Button
          type="button"
          className= {`${!edit ? '':'hidden'} absolute top-4 right-4 h-12 w-12 rounded-full bg-default-900 hover:bg-background hover:text-default-900 z-20`}
          onClick={closeTheFile}
        >
          <span className="text-xl">
            <Icon icon="fa6-solid:xmark" />
          </span>
        </Button>
        {imageUrl !== "" ? imgUrlPrev : img}
      </div>
      {imageUrl===""&& <div className={` ${files.length ? "hidden" : ""}`}>
        <div {...getRootProps({ className: "dropzone" })}>
          <input
            name="image"
            type="file"
            {...getInputProps()}
            disabled={edit}
          />

          <div className="w-full text-center border-dashed border border-default-200 dark:border-default-300 rounded-md py-[52px] flex items-center flex-col">
            <CloudUpload className="text-default-300 w-10 h-10" />
            <h4 className="text-2xl font-medium mb-1 mt-3 text-card-foreground/80">
              Drop files here or click to upload.
            </h4>
            <div className="text-xs text-muted-foreground">
              (This is just a demo drop zone. Selected files are not actually
              uploaded.)
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default UploadSingleFile;
