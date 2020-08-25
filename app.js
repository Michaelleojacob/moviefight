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

  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};

createAutoComplete({
  root: document.querySelector(".autocomplete"),
});
createAutoComplete({
  root: document.querySelector(".autocomplete-two"),
});
createAutoComplete({
  root: document.querySelector(".autocomplete-three"),
});
