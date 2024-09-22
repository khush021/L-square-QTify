import axios from "axios";

export const fetchTopAlbumData = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    return { response: response.data };
  } catch (error) {
    return { error: error };
  }
};

export const fetchNewAlbumData = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/new"
    );
    return { response: response.data };
  } catch (error) {
    return { error: error };
  }
};

