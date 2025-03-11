import { AxiosInstance } from "axios";

export default class StandardPronunciation {
  private axios: AxiosInstance;
  private apiKey: string;
  private returnFormat: string;

  constructor(axiosInstance: AxiosInstance, apiKey: string, returnFormat: string) {
    this.axios = axiosInstance;
    this.apiKey = apiKey;
    this.returnFormat = returnFormat;
  }

  /**
   * Fetch standard pronunciations for a given word.
   * @param word - The word to fetch pronunciations for.
   * @param language - The language code (optional).
   * @returns Promise with API response.
   */
  async fetch(word: string, language?: string) {
    try {
      const response = await this.axios.get(`/key/${this.apiKey}/format/${this.returnFormat}/action/standard-pronunciation`, {
        params: { word, language },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching standard pronunciation:", error);
      throw new Error("Failed to fetch data from Forvo API");
    }
  }
}