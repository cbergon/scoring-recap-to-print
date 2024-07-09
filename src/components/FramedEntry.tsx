import React from "react";

interface FramedEntryProps {
  title: string;
  content?: string;
}

function FramedEntry(props: FramedEntryProps) {
  const { title, content } = props;
  return (
    <div className="flex gap-1 items-center justify-end w-full">
      <h1 className="w-auto">{title}</h1>
      <div className="border border-2 rounded w-48 h-12 px-1 flex items-end justify-end">
        {content && (
          <p className="text-center text-xs text-gray-300">{content}</p>
        )}
      </div>
    </div>
  );
}

export default FramedEntry;
