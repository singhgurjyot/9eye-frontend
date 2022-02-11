import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


function saveToLocalStorage(state){
    const saveState = {
        stores: state.stores,
        login: state.login,
        appointments: state.appointments,
        review: state.review,
        signup: state.signup
    }
  try{
    const serializedState = JSON.stringify(saveState);
    localStorage.setItem('state', serializedState);
  } catch(e){
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state');
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch(e){
    console.log(e);
    return undefined;
  }
}

const middlware = [thunk];
const persistedState = loadFromLocalStorage();


if(window.navigator.userAgent.includes("Chrome")){
var store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(...middlware),
  )
)
  }
  else{
      store = createStore(
      rootReducer,
      persistedState,
      compose(
        applyMiddleware(...middlware),
      )
    )

  }

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;
