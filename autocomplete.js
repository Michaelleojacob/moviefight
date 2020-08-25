const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input" />
    <div class="dropdown">
    <div class= "dropdown-menu">
    <div class="dropdown-content results">
    </div>
    </div>
    </div>
    `;

  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

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
  const onInput = async (event) => {
    const items = await fetchData(event.target.value);

    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");

    for (let item of items) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener("input", debounce(onInput, 500));

  //after making a search, if  a user clicks anywhere on the screen it will close the dropdown for search results.
  document.addEventListener("click", (event) => {
    //this console.log will log anything clicked on within the browser/window
    //   console.log(event.target);

    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
