const input = document.querySelector("input");

const debounce = (callback, delay = 500) => {
  let timeoutId;

  //the return is our shield in this code block. Return is the wrapper that guards how often callback can be invoked.
  //same as return( arg1, arg2, arg3 ...)
  return (...args) => {
    //if timeoutId is defined, stop it in its tracks
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    //immediately after checking if timeoutId is defined queue up a new execution of our callback.
    timeoutId = setTimeout(() => {
      //call the function, apply all arguments to the function.
      //same as : callback(arg1, arg2, arg3...)
      callback.apply(null, args);
    }, delay);
  };
};

// could also do: const onInput = debounce(event) => {}
const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
