"use client"

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ExcelImport() {
  const [importResult, setImportResult] = useState<{ message: string; count: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      await handleSubmit(selectedFile);
    }
  };

  const handleSubmit = async (selectedFile: File) => {
    setLoading(true);
    setError(null);
    setImportResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/excel/alumni`, {
        method: 'POST',
        body: formData,
      }).then((res) => res.json());
        
      setImportResult(response.data);
      // Uncomment the next line if you want to navigate to the alumni table after import
      // router.push('/table/alumni');
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.');
    } finally {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div >
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        className="hidden"
        aria-hidden="true"
      />
      <Button
        onClick={handleImport}
        disabled={loading}
        className="relative"
      >
        {loading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          </span>
        ) : null}
        <span className={loading ? "invisible" : ""}>Import Excel</span>
      </Button>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
     
    </div>
  );
}