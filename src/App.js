import './App.css';
import CardTitleBody from './components/CardTitleBody';
import CardTitleName from './components/CardTitleName';

const exTitleStyle = {
  padding : '20px',
  fontSize : '30px',
  color : "#fff",
  backgroundColor : "#115580",
  margin : ' 0 0 20px',
  textAlign : 'center'
}


function App() {

  return (
    <div>
      <h1 className="Ex-Title" style={exTitleStyle}>Ex.1</h1>
      <CardTitleBody />
      <br />
      <br />
      <br />
      <h1 className="Ex-Title" style={exTitleStyle}>Ex.2</h1>
      <CardTitleName />
    </div>
  );
}

export default App;
