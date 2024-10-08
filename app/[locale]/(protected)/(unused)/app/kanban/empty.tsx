
import { Rabbit } from 'lucide-react';


const EmptyTask = () => {
  return (
    <div className=" absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Rabbit className=" h-[200px]  w-[200px] text-default-400 " strokeWidth={1} />
      <div className=' text-sm text-default-500 text-center'>No tasks</div>
    </div>
  );
};

export default EmptyTask;