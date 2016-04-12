export default ((state='jk', action) => { // jshint ignore:line
    if(action.type === 'UPDATE_NAME') {
        return action.value;
    }
    return state;
});
