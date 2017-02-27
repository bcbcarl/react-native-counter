import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);
const configureStore = () => store;

export default configureStore;
