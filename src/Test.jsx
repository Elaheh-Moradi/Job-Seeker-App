import React from 'react';

const Test = () => {
  return (
    // The outer container takes at least the full viewport height and uses flexbox in a column direction
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl">My Responsive App</h1>
      </header>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row flex-1">
        
        {/* Sidebar */}
        <aside className="bg-gray-200 p-4 md:w-1/4">
          <h2 className="text-xl mb-2">Sidebar</h2>
          <ul>
            <li className="py-1">Item 1</li>
            <li className="py-1">Item 2</li>
            <li className="py-1">Item 3</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="bg-white p-4 flex-1">
          <p>
            This is the main content area. On smaller screens, it stacks below the sidebar. On medium and larger screens, it appears to the right of the sidebar.
          </p>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        Footer Content
      </footer>
    </div>
  );
};

export default Test;
