
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AddBook } from './components/AddBook';
import { BookComponent } from './components/BookComponent';
import { BookDetails } from './components/BookDetails';
import { EditBook } from './components/EditBook';

function App() {
  return (
    <div className="App">
    <Switch>

      <Route exact path="/">
        <BookComponent/>
      </Route>

      <Route  path="/book/:id">
        <BookDetails/>
      </Route>

      <Route  path="/add/book">
        <AddBook/>
      </Route>

      
      <Route  path="/edit/:id">
        <EditBook/>
      </Route>

    </Switch>
    </div>
  );
}

export default App;
