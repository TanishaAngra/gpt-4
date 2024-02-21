import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Artificial Intelligence, separating attitudes towards the positive aspects and negative aspects of AI, with the structure confirmed in two confirmatory factor analyses using data from two large samples.',
  },
  {
    title: 'Become the tended active',
    text: 'Companies capturing lasting value from artificial intelligence think differently, from the C-suite to the front line. Here’s how to make the shift from opportunistic efforts to a truly AI-enabled organization.',
  },
  {
    title: 'Message bots and language model',
    text: 'ChatGPT is a variant of the GPT (Generative Pre-training Transformer) language model, which is a machine learning model developed by OpenAI for generating human-like text. It is designed to be able to generate coherent and coherent paragraphs of text based on a given prompt or context.',
  },
  
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;