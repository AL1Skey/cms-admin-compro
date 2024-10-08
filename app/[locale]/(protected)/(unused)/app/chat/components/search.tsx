import { Input } from '@/components/ui/input';
import React from 'react';
import {Search as SearchIcon} from "lucide-react"
const Search = () => {
  return (
    <div className='relative'>
      <SearchIcon className='absolute top-1/2 -translate-y-1/2 start-6 w-4 h-4 text-default-600' />
      <Input placeholder='Search...'  className='dark:bg-transparent rounded-none border-l-0 border-r-0 dark:border-default-300 focus:border-default-200 ps-12 text-lg font-normal' size="lg"/>
    </div>
  );
};

export default Search;