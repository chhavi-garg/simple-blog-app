import { useState } from "react";
const Home = () => {

    // let name = 'Chhavi';

    const [name,setName] = useState('Chhavi');
    const [age,setAge] = useState(25);

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
        </div>
      );
}
 
export default Home;