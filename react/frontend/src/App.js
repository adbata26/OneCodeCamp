import logo from './logo.svg';
//import react
//import React, {useState, useEffect} from 'react';
import './App.css';
import A1_descriptions from './components/A1_descriptions';
import A1_images from './components/A1_images';
import Test from './components/Test';
import Hello from './components/Hello';
import Fruits from './components/Fruits';
import ConditionalCompo from './components/ConditionalCompo';
import Message from './components/Message';
import Coun from './components/Form';
import CommentSection from './components/CommentSection';
import Todoter from './components/Counter'
import Formlist from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import A2_form from './components/A2_form';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Pricing from './pages/Pricing';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

/*
  const [currentTime, setC1urrentTime] = useState('');

  
    const intervalId = setInterval(() => {
      const date = new Date();

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if(hours > 13)
      {
        hours = hours - 12;
      }

      if(hours < 10)
      {
        hours = `0${hours}`;
      }

      if(minutes < 10)
      {
        minutes = `0${minutes}`;
      }

      if(seconds < 10)
      {
        seconds = `0${seconds}`;
      }

      const formattedTime = `${hours} : ${minutes} : ${seconds}`;
      setCurrentTime(formattedTime);
    }, 1000)



    const date2 = new Date();

    let hours2 = date2.getHours();
    let minutes2 = date2.getMinutes();
    let seconds2 = date2.getSeconds();
    const formattedTime2 = `${hours2} : ${minutes2} : ${seconds2}`;

    document.getElementById('test').innerHTML = formattedTime2;

  const myfruits = ["Apple","Banana","Mango"];
  const person = {
    name:"Rob",
    age:28
  }
  
  const images = ["aa.jpg","bb.jpg","cc.jpg"];
  const descriptions = [
    { 
      name: "Lynda Kernel",
      Age: 25, 
      description: "Passionate about life and always up for an adventure. Whether it's exploring new coffee shops, diving into a good book, or hitting the hiking trails, I love a good mix of spontaneity and quiet moments. Aspiring foodie who enjoys whipping up new recipes in the kitchen. I value meaningful conversations and a good sense of humor. Let's share stories, laughter, and maybe our favorite playlists."
    },

    { 
      name: "Michelle Vancouver",
      Age: 22, 
      description: "Passionate about life and always up for an adventure. Whether it's exploring new coffee shops, diving into a good book, or hitting the hiking trails, I love a good mix of spontaneity and quiet moments. Aspiring foodie who enjoys whipping up new recipes in the kitchen. I value meaningful conversations and a good sense of humor. Let's share stories, laughter, and maybe our favorite playlists."
    },

    { 
      name: "Cameron Alts",
      Age: 31, 
      description: "Passionate about life and always up for an adventure. Whether it's exploring new coffee shops, diving into a good book, or hitting the hiking trails, I love a good mix of spontaneity and quiet moments. Aspiring foodie who enjoys whipping up new recipes in the kitchen. I value meaningful conversations and a good sense of humor. Let's share stories, laughter, and maybe our favorite playlists."
    },

  ];


    <div className="App">
      <h1>HELLO, World!</h1>
     <div>It is <span id="test"></span></div> 
      It is <span>{currentTime}</span>
    </div>
    <div className="App">
      <Hello person={person} fruits={myfruits}/> 
    </div>
    
    */
        {/*
      <div className="mydiv">
      <div className="title">OH MY GOSH - DATING APP</div>
        <div className="grid-container">
             <A1_images path={images[0]}/>
             <div className="description_container"><A1_descriptions description={descriptions[0]}/></div>
        </div>

        <div className="grid-container">
             <A1_images path={images[1]}/>
             <div className="description_container"><A1_descriptions description={descriptions[1]}/></div>
        </div>


        <div className="grid-container">
             <A1_images path={images[2]}/>
             <div className="description_container"><A1_descriptions description={descriptions[2]}/></div>
        </div>


  
      </div>
  */}
  return (

  
    <div className="App" style={{overflow: "hidden" }}>

    <Router>
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
    <Footer/>
      </Router>
     </div>
 

  );






}

export default App;
