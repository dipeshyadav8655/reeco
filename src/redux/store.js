import { createStore } from 'redux';
import productsReducer from '../redux/statusChange/productsReducer';

const store = createStore(productsReducer);

export default store;