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

input.addEventListener("input", (event) => {
  //access the changed input text. Whatever the user just put into the input.
  fetchData(event.target.value);
});
