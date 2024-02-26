import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT4.css';

const WhatGPT4 = () => (
  <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
    <div className="gpt4__whatgpt4-feature">
      <Feature title="What is GPT-4" text="GPT-4 is a major advance on previous generative AI models from OpenAI, particularly in how it handles complex and nuanced prompts. More than earlier generative AI models, GPT-4 can adapt to specific tones, emotions, and genres. It can also generate code, process images, and interpret 26 languages." />
    </div>
    <div className="gpt4__whatgpt4-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt4__whatgpt4-container">
      <Feature title="Chatbots" text="A chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person.." />
      <Feature title="Knowledgebase" text="An AI knowledge base is a centralized repository for information integrated with artificial intelligence (AI) technologies. Unlike traditional knowledge bases, which serve as static repositories of information like FAQs, articles, and how-to guides, an AI knowledge base is dynamic." />
      <Feature title="Education" text="By using AI-powered tools and strategies, educators can personalize learning, improve student outcomes, and better prepare students for success in the digital age. Discover how AI can transform your district, school or classroom with AI for Education." />
    </div>
  </div>
);

export default WhatGPT4;