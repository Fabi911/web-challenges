import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

    function handleAddTag(data){
      const addNewTag=[...tags, data]
      setTags(addNewTag)

    }

    function handleDeleteTag (tagToDelete){
      const removeTag =tags.filter((tag)=>tag!==tagToDelete)
      setTags(removeTag);
    }

  return (
    <main className="app">
      
      <Form onAddTag={handleAddTag}/>
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
