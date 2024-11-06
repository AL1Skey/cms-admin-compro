'use client'

import { Input } from '@/components/ui/input'
import { useState, useRef, KeyboardEvent } from 'react'
type PageProps = Partial<{
    [key: string]: any;
}>;
export default function TagInput({data}: PageProps) {
  const [tags, setTags] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault()
      addTag(inputValue.trim())
    } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      removeTag(tags[tags.length - 1])
    }
  }

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])
      setInputValue('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div 
        className="flex flex-wrap items-center border border-gray-300 rounded-md p-2 focus-within:border-blue-500 cursor-text"
        onClick={handleContainerClick}
      >
        {tags.map(tag => (
          <span 
            key={tag} 
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center mr-2 mb-2"
          >
            {tag}
            <button
              type="button"
              className="ml-1 text-blue-600 hover:text-blue-800 focus:outline-none"
              onClick={() => removeTag(tag)}
            >
              ×
              <span className="sr-only">Remove tag</span>
            </button>
          </span>
        ))}
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className="flex-grow outline-none bg-transparent text-sm"
          placeholder={tags.length === 0 ? "Type and press Enter to add tags..." : ""}
        />
      </div>
    </div>
  )
}