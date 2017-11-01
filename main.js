// Reducer

const counter = function (state, actions) {
    if (!state) state = 0;
    switch (actions.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
};
const store = Redux.createStore(counter);


$('#inc').click(function () {
    store.dispatch({type: 'INCREMENT'})
});

$('#dec').click(function () {
    store.dispatch({type: 'DECREMENT'})
});
// Use subscribe() to update the UI in response to state changes.
store.subscribe(function () {
    $('#num').html(store.getState());
});


///////////////////////// Object Reducer Example ////////////////////////////////////
const updateNameReducer = function (state, actions) {
    var first_name = actions.first_name || '';
    var last_name = actions.last_name || '';
    if(state) state = {};
    switch (actions.type) {
        case 'UPDATE_FIRST_NAME':
            return Object.assign({}, state, {first_name: first_name});
        case 'UPDATE_LAST_NAME':
            return Object.assign({}, state, {last_name: last_name});
        default:
            return state
    }
};

const updateNameStore = Redux.createStore(updateNameReducer);

$('#firstNameInput').on('input', function (e) {
    updateNameStore.dispatch({type: 'UPDATE_FIRST_NAME', first_name: e.target.value});
});
$('#lastNameInput').on('input', function (e) {
    updateNameStore.dispatch({type: 'UPDATE_LAST_NAME', last_name: e.target.value});
});

updateNameStore.subscribe(function () {
    var state = updateNameStore.getState();
    var first_name = state.first_name;
    var last_name = state.last_name;

    $('#firstName').html(first_name);
    $('#lastName').html(last_name);
    console.log(state);
});