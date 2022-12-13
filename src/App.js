import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import Alert from './components/Alert';
//import About from './components/About';
//import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

   function App() {
     
    const [mode,setMode] = useState('light');
    const [alert,setAlert] = useState(null);
    const [green,setGmode] = useState('light')
   
     const toggleGreen=()=>{
      if(green==='light'){
         setGmode('dark');
         document.body.style.backgroundColor = 'red'
      }
         else{
          setGmode("light");
          document.body.style.backgroundColor = 'white'
         }
     }
    const setingAlert=(Message,Type)=>{
    setAlert({
      Message:Message,
      Type:Type
    })
   }

    const toggleBtn =()=>{
      if(mode==='light'){
         setMode('dark')
         document.body.style.backgroundColor = 'grey'
         setingAlert("Dark mode is enabled","Success");
         
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        setingAlert("Light mode is enabled","Succes")  ;     
      }
    }
    return (
      <>
      <Navbar title='TYPE BOXING' Abouttext='About' home = 'Home' mode={mode} toggleBtn={toggleBtn} green={green} toggleGreen={toggleGreen} setingAlert={setingAlert} />
      <Alert Alert={alert}/>
      <Textform />
     {/* <Router>
      <div className='container'>
     <Switch>
          <Route exact path="/about">
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
      </div> 
  
     </Router> */}
       </>
    )
    }

  export default App;
