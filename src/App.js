import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import VisibilityFilter from './VisibilityFilter'
import './App.css';
import  AddTodo  from './AddTodo'
import Header from "./Header"
const initState = {
  todo:[]
}
const store = createStore(reducer,initState)
function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <AddTodo />
        <VisibilityFilter />
      </Provider>
    </div>
  );
}

export default App;

