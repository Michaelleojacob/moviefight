// let ombd = "http://www.omdbapi.com/?apikey=15c4edfb&";
// let apikey = "15c4edfb";

const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "15c4edfb",
      //s for search
      // s: "avengers",
      i: "tt0848228",
    },
  });
  console.log(response.data);
};

fetchData();
