const root = document.querySelector(".autocomplete");
root.innerHTML = `
<label><b>Search for a Movie</b></label>
<input class="input" />
<div class="dropdown">
    <div class= "dropdown-menu">
        <div class="dropdown-content results">
        </div>
    </div>
</div>
`;

const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");
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
const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  resultsWrapper.innerHTML = "";
  dropdown.classList.add("is-active");

  for (let movie of movies) {
    const option = document.createElement("a");
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    option.classList.add("dropdown-item");
    option.innerHTML = `
    <img src="${imgSrc}" />
    ${movie.Title} 
    `;
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 500));
