import { Rabbit } from "lucide-react";

const EmptyProject = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Rabbit
        className=" h-[200px]  w-[200px] text-default-400 "
        strokeWidth={1}
      />
      <div className=" text-sm text-default-500 text-center">No Products</div>
    </div>
  );
};

export default EmptyProject;
