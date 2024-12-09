import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';

type WysiwygAreaProps = Partial<{
  [key:string]:any;
}>


const WysiwygArea = ({content}:WysiwygAreaProps) => {
  const [description, setDescription] = useState<string>(content);

  const handleContentChange = (value: string) => {
    setDescription(value);
  };

  return (
    <div>
      <RichTextEditor value={description} onChange={handleContentChange} />
      <input type="hidden" name="description" value={description} />
    </div>
  );
};

export default WysiwygArea;
