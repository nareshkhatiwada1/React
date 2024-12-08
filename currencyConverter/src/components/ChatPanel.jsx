import React, { useState } from "react";

const ChatPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* AI Icon (Top Left) */}
      <button
        hidden={isOpen}
        onClick={toggleChat}
        className="fixed top-4 right-4 z-50 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition"
        aria-label="Open Chat"
      >
        🤖
      </button>

      {/* Sliding Chat Panel */}
      <div
        className={`z-40 fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        
      >
        {/* Close Button */}
        <button
          onClick={toggleChat}
          className="absolute top-4 right-4 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300 transition"
          aria-label="Close Chat"
        >
          ➡️
        </button>

        {/* Chat Content */}
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Chat with AI</h2>
          <div className="flex-grow overflow-y-auto">
            {/* Chat messages */}
            <div className="space-y-2">
              <div className="bg-gray-100 p-2 rounded-lg text-sm">
                Hello! How can I assist you?
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
