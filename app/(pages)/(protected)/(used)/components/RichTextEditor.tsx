import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import the Snow theme CSS
import './style.css'
interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const RichTextEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow', // Use the Snow theme
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            ['clean'], // Remove formSatting
          ],
        },
      });

      // Set initial value
      quillRef.current.root.innerHTML = value;

      // Listen for text changes
      quillRef.current.on('text-change', () => {
        const content = quillRef.current?.root.innerHTML || '';
        onChange(content);
      });
    }

    return () => {
      // Clean up the Quill instance
      quillRef.current = null;
    };
  }, []);

  return <div ref={editorRef} />;
};

export default RichTextEditor;
