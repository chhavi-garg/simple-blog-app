import { useState,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {

    // let name = 'Chhavi';
    // const [name,setName] = useState('Chhavi');
    const [age,setAge] = useState(25);

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

      const [name,setName] = useState('mario');
      const handleDelete =(id) =>{
        const newBlogs = blogs.filter(blog =>blog.id!==id);
        setBlogs(newBlogs);
      }

      useEffect(()=>{
        console.log('use effect ran');
        console.log(blogs);
        console.log(name);
      },[name]);
    const handleClick = ()=>
    {
        // name = 'Someone';
        setName('Someone');
        setAge(30);
    }
    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <BlogList blogs={blogs} title="All Blogs ! " handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blogs ! " />
            <button onClick={()=> setName('chhavi')}>change name</button>
            <p>{name}</p>
        </div>
      );
}
 
export default Home;