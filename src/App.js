
import './Styles/App.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";  
import Todo from './components/Todo';

function App() {
  return (
    <div className="container">
     
    <Todo></Todo>
    </div>
  
  );
}

export default App;
