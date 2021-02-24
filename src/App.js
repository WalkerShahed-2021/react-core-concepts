  import logo from './logo.svg';
  import './App.css';

  function App() {
 var students =['shahed','roki','masom', 'jahid',]
 const  products =[
   {name: 'photoshop',price: '&24.9'},
   {name: 'illustrator',price: '&64.99'},
   {name: 'PDE Reader',price: '&72.88'},
 ]
    return (
      <div className="App">
        <header className="App-header">
          <p>i am a react parson </p>
              <Person product={products[0]}></Person>
              <Person product={products[1]} ></Person>
              <Person name="mostafa" job="gora"></Person>
              <Person name="mostafa" job="gora"></Person>
          </header>
      </div>
    );
  }
function products(props){
  const productStyle={
   border:'2px solid gray',
   borderRadius:'5px',
   backgroudColor:'lightgray',
   height:'200px',
   width:'200px',
   float:'left'
  }
  return(
    <div style={productStyle}>
     <h3>{props.product.name}</h3>
     <h5>{props.product.price}</h5>
     <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h3>My Neme:{props.name}</h3>
      <p>My profession:{props.job}</p>
    </div>
  )
}
 


  export default App;
