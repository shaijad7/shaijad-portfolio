"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { processIntent, ChatContext, ChatIntent } from '@/lib/intent-engine';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  intent?: ChatIntent;
}

let messageIdCounter = 0;

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatContext, setChatContext] = useState<ChatContext>({});
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const suggestedQuestions = [
    "Who is Shaijad?",
    "Tell me about QLix",
    "His projects",
    "Android skills",
    "Internship experience",
    "Contact info",
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim() || text.length > 500 || isLoading) return;
    
    const userMessage: Message = { id: `msg-${messageIdCounter++}`, role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulated typing delay
    setTimeout(() => {
      const { text: responseText, intent, newContext } = processIntent(text, chatContext);
      
      const assistantMessage: Message = { 
        id: `msg-${messageIdCounter++}`, 
        role: 'assistant', 
        content: responseText, 
        intent 
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setChatContext(newContext);
      setIsLoading(false);
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-on-primary shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-fixed focus:ring-offset-2 focus:ring-offset-background ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm sm:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat Panel */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'} 
        bottom-0 right-0 w-full h-[85vh] max-h-[85vh] sm:max-h-[calc(100vh-3rem)] sm:h-[650px] sm:w-[420px] sm:bottom-6 sm:right-6 bg-surface-container-low border border-outline-variant sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="AI Assistant Chat"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between p-4 border-b border-outline-variant bg-surface">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-geist font-semibold text-on-surface text-sm">✦ Shaijad&apos;s AI Assistant</h3>
              <p className="text-xs text-on-surface-variant font-mono">Ask me about Shaijad, his work, or projects.</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-4 bg-surface-container-lowest">
          {messages.length === 0 && (
            <div className="flex flex-col gap-4 h-full items-center justify-center text-center px-4 animate-in fade-in duration-500">
              <div className="p-3 bg-surface-container rounded-full text-primary mb-1">
                <Bot className="w-6 h-6" />
              </div>
              <p className="text-on-surface-variant text-sm mb-3">Hi! I&apos;m Shaijad&apos;s AI assistant. Ask me about his projects, skills, or experience.</p>
              <div className="grid grid-cols-2 gap-2 w-full max-w-sm mx-auto">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    className="text-xs px-3 py-2 bg-surface border border-outline-variant rounded-full text-on-surface hover:border-primary hover:text-primary transition-colors text-center font-medium shadow-sm hover:shadow-md"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map(m => (
            <div key={m.id} className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${m.role === 'user' ? 'bg-primary text-on-primary rounded-br-sm' : 'bg-surface-container border border-outline-variant text-on-surface rounded-bl-sm'}`}>
                <span className="whitespace-pre-wrap">{m.content}</span>
                
                {/* Contact Actions */}
                {m.intent === 'contact' && (
                  <div className="flex flex-col gap-2 mt-3">
                    <Button size="sm" asChild className="w-full justify-center">
                      <a href="mailto:shaijadshaikh8380@gmail.com">Send an Email</a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="w-full justify-center">
                      <a href="https://github.com/shaijad7" target="_blank" rel="noopener noreferrer">View GitHub</a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="w-full justify-center">
                      <a href="/Shaijad-Shaikh-Resume.pdf" target="_blank">Download Resume</a>
                    </Button>
                  </div>
                )}
                
                {/* Fallback Actions */}
                {m.intent === 'fallback' && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Button size="sm" variant="outline" onClick={() => handleSendMessage('Tell me about your projects')} className="flex-1 min-w-max">Projects</Button>
                    <Button size="sm" variant="outline" onClick={() => handleSendMessage('What are your skills?')} className="flex-1 min-w-max">Skills</Button>
                    <Button size="sm" variant="outline" onClick={() => handleSendMessage('How can I contact you?')} className="flex-1 min-w-max">Contact</Button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex w-full justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm bg-surface-container border border-outline-variant text-on-surface rounded-bl-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-on-surface-variant rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-on-surface-variant rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-on-surface-variant rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-outline-variant bg-surface shrink-0">
          {messages.length > 0 && (
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-[10px] uppercase font-mono text-on-surface-variant tracking-wider">Zero-Cost Local Assistant</span>
              <button onClick={() => { setMessages([]); setChatContext({}); }} className="text-[11px] text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 focus:outline-none">
                <X className="w-3 h-3" /> Clear chat
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Shaijad..."
              disabled={isLoading}
              className="w-full bg-surface-container-high border border-outline-variant rounded-xl px-4 py-2.5 pr-12 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-primary text-on-primary rounded-lg hover:bg-primary-fixed disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
