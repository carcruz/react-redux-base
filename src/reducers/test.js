const initialState = {
  name: ''
};

function test(state = initialState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return {
        state: action.state
      };
    default:
      return state;
  }
}

export default test;