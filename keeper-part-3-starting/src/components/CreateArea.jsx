import React , { useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
   
  });
    
  function handelChange(event) {
    const { value, name } = event.target;
    
    setNote(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
      }

     function onSubmit (event)  {
        props.onAdd(note);
        setNote({
          title: "",
          content: "",
         
        });
        event.preventDefault();
      }
    
  return (
    <div>
      <form>
        <input onChange={handelChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handelChange} name="content" placeholder="Take a note..." rows="3"  value={note.content} />
        <button onClick= {onSubmit}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
