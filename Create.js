import { useState } from "react";

const Create = () => {
    
    const [title,setTitle] = useState("");
    const[body,setBody] = useState("");
    const[author,setAuthor] = useState("Dragos")
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};

        fetch('http://localhost:8000/blogs',{method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blog)



        }).then(()=>{console.log("new blog added)")})
        
    }
    
    return (
        
        <div className = "create">
            <h2> Add a new post!</h2>
            <form onSubmit ={handleSubmit}>
            <label> Blog title: </label>
            <input type="text"
            required 
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            ></input>

            <label> Text: </label>
            <textarea required value={body} onChange={(e)=>setBody(e.target.value)}>


            </textarea>

            <label> Author: </label>

            <select value = {author} onChange = {(e)=>setAuthor(e.target.value)}>

            <option value = "Dragos">Dragos</option>
            <option value = "Emma"> Emma </option>
            <option value = "David"> David</option>

            </select>
            <button>Send!</button>
            <p>{title}</p>
            <p>{body}</p>


            </form>


        </div>
     );
}
 
export default Create ;