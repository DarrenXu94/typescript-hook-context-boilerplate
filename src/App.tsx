import React from 'react';
import './App.css';

import { CountProvider } from "./store/mainStore";

import BlogContainer from "./components/BlogContainer"

const blogItems = [
  { key: 0, title: "Title 1" },
  { key: 1, title: "Title 2" },
  { key: 2, title: "Title 3" }


]

function App() {
  return (
    <div className="App">
      <CountProvider>

        <BlogContainer blogItems={blogItems} />
      </CountProvider>
    </div>
  );
}

export default App;
