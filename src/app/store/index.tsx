import { AnyAction, compose, createStore } from 'redux';
import { StoreState } from './store.interface';
import { reducer as storeReducer } from './store.reducer';

export const configureStore = () => {
  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  const store = createStore<StoreState, AnyAction, any, any>(
    storeReducer,
    composeEnhancers(),
  );

  return store;
};

export const store = configureStore();
