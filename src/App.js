import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
//import {Col, Container, Row} from 'react-bootstrap';
//
//import Card from 'react-bootstrap/Card';


function App() {
  const acards =[
    {imgsrc:"https://picsum.photos/id/237/200/300",
    title:"Perro",
    description:"Raza, golden retriever"
    },
    {imgsrc :"https://picsum.photos/id/1074/200/300",
    title:"Leon",
    description:"Leon de la Sabana Africana"
    },
    {imgsrc :"https://picsum.photos/id/433/200/300",
    title:"Oso",
    description:"Oso Pardo"
    },
    {imgsrc :"https://picsum.photos/id/577/200/300",
    title:"Ciervo",
    description:"Antilope Cafe"
    },
    {imgsrc :"https://picsum.photos/id/582/200/300",
    title:"Lobo",
    description:"Lobo Felpudo del Sur de Chile"
    },
    {imgsrc :"https://picsum.photos/id/593/200/300",
    title:"Tigre",
    description:"Tigre de Bengala,comun de la India"
    }
  ];
  
  return (
    <div className="App">
       <Header titulo="Galeria de Imagenes" />
       <div className='container'>
        <div className='row'>
           <div className='col-lg-4'>
              {acards.map((acard, index) => {return ( <Card key={index} imgsrc={acard.imgsrc} title={acard.title} description={acard.description} />)
              })}
           </div>
        </div>
        </div> 
       <hr></hr> 
       <Footer />
    </div>
  );
}

export default App;

/*

         {acards.map(acard => {return(<Card imgsrc={acard.imgsrc} title={acard.title} description={acard.description}  />)})}  

     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/