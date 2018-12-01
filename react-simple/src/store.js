import { createStore } from 'redux';
import { reducer } from './reducers/reducer'

export const Store = createStore(reducer);