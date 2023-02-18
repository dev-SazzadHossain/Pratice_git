const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initialstate
const initialState = { value: 0 };
// initialstate

// action idenfiers
const Increment = "increment";
const Decrement = "decrement";
// action idenfiers
// action creators
const incrementFun = (value) => {
  return { type: Increment, payload: value };
};
const decrementFun = (value) => {
  return { type: Decrement, payload: value };
};
// action creators

// reducer function

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { ...state, value: state.value + action.payload };
  } else if (action.type === "decrement") {
    return { ...state, value: state.value - action.payload };
  } else {
    return state;
  }
};
// reducer function

// store state
const store = Redux.createStore(counterReducer);
console.log(store);
const render = () => {
  const currentState = store.getState();
  counterEl.innerText = currentState.value;
};
render();
store.subscribe(render);
// store state
incrementEl.addEventListener("click", () => {
  store.dispatch(incrementFun(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrementFun(3));
});

// main container
const appendFun = () => {
  const mainContainer = document.getElementById("main_container");
  const createEl = document.createElement("div");
  createEl.innerHTML = `<div id="counter" class="text-2xl font-semibold"></div>
  <div class="flex space-x-3">
    <button
      id="increment"
      class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      id="increment"
    >
      Increment
    </button>
    <button
      id="decrement"
      class="bg-red-400 text-white px-3 py-2 rounded shadow"
      id="decrement"
    >
      Decrement
    </button>
  </div>`;
  mainContainer.appendChild(createEl);
};

// main container
