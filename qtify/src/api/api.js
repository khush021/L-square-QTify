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
