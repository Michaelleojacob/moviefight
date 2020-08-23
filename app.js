// let ombd = "http://www.omdbapi.com/?apikey=15c4edfb&";
// let apikey = "15c4edfb";

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "15c4edfb",
      s: searchTerm,
      //s for search
      // s: "avengers",
      // i: "tt0848228",
    },
  });
  console.log(response.data);
};

const input = document.querySelector("input");
//------this code was the firstdraft. Ran a get request every time a key was pressed --------
// input.addEventListener("input", (event) => {
//   //access the changed input text. Whatever the user just put into the input.
//   fetchData(event.target.value);
// });
let timeoutId;

const onInput = (event) => {
  //
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  //what does timeoutID actually save?
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};

input.addEventListener("input", onInput);
