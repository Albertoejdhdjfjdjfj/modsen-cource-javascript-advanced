import './App.css';
import { photos } from './data';
function App() {
  return (
    <div className="App">
    {
        photos.map((el)=>
          <img key={el.id} src={el.url} title={el.title}/>
        )
    }
    </div>
  );
}

export default App;
