import {useState,useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    //let name = 'Mario';
    const [blogs,setBlogs] = useState(null)
    const[name,setName]=useState("Mario");
    const[isPending,setIsPending] = useState(true);
    const handleClick =() =>
    {
       setName("Dragos");
    }

  

    useEffect(() => {
       setTimeout(() => fetch("http://localhost:8000/blogs").then(res => {return res.json()}).then(data => {console.log(data); setBlogs(data);setIsPending(false)}),1000);

    },[]);
    
    const title ="Welcome to Our Tea Blog " ;
  const title1 = "There is no greater happiness in life than a cup of tea!";
    return ( 
        <div className = "home">
    <h1>
        {title} , {name} !
        

      </h1>
      <h2>{title1}</h2>
      <button onClick={handleClick}>Not you?</button>
      
      
<br>
</br>
<br>
</br>
<br>
</br>

{isPending && <div> Loading...</div>}
{blogs &&<BlogList blogs ={blogs} title ="All Blogs: "  ></BlogList>}
        
        </div>

     );
}
 
export default Home;