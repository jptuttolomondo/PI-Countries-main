import './App.css';
import { Router } from './router/Router';
import{Provider} from 'react-redux';
import store from './store/store'


function App() {
  return (
   <Provider store={store}>
      <Router/>;
   </Provider>
        
  );
}

export default App;


  
    /*
      <Route exact path="/" component={Houses} />
      <Route exact path="/houses/:houseId"render={({match})=><HouseDetail match={match} />}></Route>
      <Route exact path="/house/create" component={CreateHouse} />
    </div>
  );
};
*/

