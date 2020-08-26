import people from './people.json';
import {act} from 'react-test-renderer';
const initialState = {
  people,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
