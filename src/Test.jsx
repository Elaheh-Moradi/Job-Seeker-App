import { useState } from "react";

function Test({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t">{content}</div>
      )}
    </div>
  );
}

function Accordion() {
  return (
    <div className="max-w-lg mx-auto mt-10 border rounded-lg">
      <AccordionItem title="What is React?" content="React is a JavaScript library for building UIs." />
      <AccordionItem title="What is Tailwind?" content="Tailwind is a utility-first CSS framework." />
      <AccordionItem title="Why use React?" content="React makes UI development fast and scalable." />
    </div>
  );
}

export default Test;