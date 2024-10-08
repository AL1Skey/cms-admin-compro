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
const UploadSingleFile = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
    },
  });

  const img = files.map((file) => (
    <Image
      key={file.name}
      alt={file.name}
      width={1000}
      height={300}
      className="w-full h-full object-cover rounded-md"
      src={URL.createObjectURL(file)}
    />
  ));

  const closeTheFile = () => {
    setFiles([]);
  };

  return (
    <div className={files.length ? "h-[300px] w-full" : ""}>
      {files.length ? (
        <div className="w-full h-full relative">
          <Button
            type="button"
            className="absolute top-4 right-4 h-12 w-12 rounded-full bg-default-900 hover:bg-background hover:text-default-900 z-20"
            onClick={closeTheFile}
          >
            <span className="text-xl">
              <Icon icon="fa6-solid:xmark" />
            </span>
          </Button>
          {img}
        </div>
      ) : (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />

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
      )}
    </div>
  );
};

export default UploadSingleFile;
