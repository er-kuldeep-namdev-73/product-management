import React from 'react';
import { Bold, Italic, Underline, Code, List, AlignLeft, AlignCenter, AlignRight, Heading1, Heading2, Heading3 } from 'lucide-react';


const ToolbarButton = ({ icon, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`p-2 hover:bg-gray-100 rounded ${isActive ? 'bg-gray-100' : ''}`}
  >
    {icon}
  </button>
);

const RichTextEditor= () => {
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <div className="flex flex-wrap gap-1 p-2 border-b bg-white">
        <ToolbarButton icon={<Heading1 size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<Heading2 size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<Heading3 size={20} />} onClick={() => {}} />
        <div className="w-px h-6 bg-gray-200 mx-1 my-auto" />
        <ToolbarButton icon={<Bold size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<Italic size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<Underline size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<Code size={20} />} onClick={() => {}} />
        <div className="w-px h-6 bg-gray-200 mx-1 my-auto" />
        <ToolbarButton icon={<List size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<AlignLeft size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<AlignCenter size={20} />} onClick={() => {}} />
        <ToolbarButton icon={<AlignRight size={20} />} onClick={() => {}} />
      </div>
      <div className="min-h-[200px] p-4 bg-white">
        <div
          contentEditable
          className="outline-none min-h-[inherit] prose max-w-none"
          placeholder="Start writing product description..."
        />
      </div>
    </div>
  );
}

export default RichTextEditor;