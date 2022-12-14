import axios from "axios";

const API_KEY = "30438181-5fa6a1c16c4b444b6f9a1e533";
const API_URL = "https://pixabay.com/api/";

axios.defaults.baseURL = API_URL; // Це таке підключення бібліотеки "axios"? (конспект)

//Даний запис беремо з інструкції по встановленню бібліотеки "axios"

export async function fetchImages(searchParams, page) {
  const response = await axios.get(
    `/?q=${searchParams}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}
