
import React, { useState, useRef, useEffect } from 'react';
import { getLegalResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', content: 'مرحباً بك! أنا مساعدك القانوني الذكي. كيف يمكنني مساعدتك اليوم؟', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    const response = await getLegalResponse(input, history);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-in fade-in duration-300">
      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-indigo-900 text-white rounded-br-none' 
                : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none'
            }`}>
              {msg.content}
              <div className={`text-[9px] mt-1 opacity-60 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end">
            <div className="bg-white border border-gray-100 p-4 rounded-3xl rounded-bl-none flex gap-1">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 flex gap-2 items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="اكتب سؤالك القانوني هنا..."
          className="flex-1 bg-gray-100 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <button 
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="w-12 h-12 bg-indigo-900 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-transform disabled:opacity-50"
        >
          <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatView;
