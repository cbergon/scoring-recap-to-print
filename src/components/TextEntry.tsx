import React from "react";

interface TextEntryProps {
  title: string;
}

function TextEntry(props: TextEntryProps) {
  const { title } = props;
  return (
    <div className="flex gap-1 items-baseline w-full">
      <h1>{title}</h1>
      <div className="border-b border-2 w-full" />
    </div>
  );
}

export default TextEntry;
