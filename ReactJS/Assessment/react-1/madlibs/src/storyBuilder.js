import React, { useState } from "react";
import StorysSelections from "./storysSelections";
import StoryDisplay from "./storyDisplay";
import "./StoryBuilder.css";

const StoryBuilder = () => {
  const INITIAL_STATE = {
    title: "MadLib",
    text: "Cooking a Nice MadLib are you!!!",
  };
  const [story, setStory] = useState(INITIAL_STATE);

  const renderStory = (
    title = INITIAL_STATE.title,
    text = INITIAL_STATE.text,
    wordsToAdd
  ) => {
    for (const w in wordsToAdd) {
      text = text.replaceAll(`(${w.toUpperCase()})`, wordsToAdd[w]);
    }
    setStory({ title, text });
  };

  return (
    <div className="story-holder">
      <div className="story-selection">
        <StorysSelections renderStory={renderStory} />
      </div>
      <br></br>
      <div className="story-display">
        <StoryDisplay title={story.title} text={story.text} />
      </div>
    </div>
  );
};

export default StoryBuilder;
