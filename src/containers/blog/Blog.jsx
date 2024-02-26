import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt4__blog section__padding" id="blog">
    <div className="gpt4__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt4__blog-container">
      <div className="gpt4__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2023" text="GPT-4 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt4__blog-container_groupB">
        <Article imgUrl={blog02} date="Oct 11, 2023" text="What the New GPT-4 AI Can Do?" />
        <Article imgUrl={blog03} date="Nov 15, 2023" text="OpenAI just released an updated version of its text-generating artificial intelligence program." />
        <Article imgUrl={blog04} date="Jan 1, 2024" text="GPT-4 is here: what scientists think!" />
        <Article imgUrl={blog05} date="Feb 17, 2024" text="Today, the new language model from OpenAI may not seem all that dangerous. But the worst risks are the ones we cannot anticipate." />
      </div>
    </div>
  </div>
);

export default Blog;