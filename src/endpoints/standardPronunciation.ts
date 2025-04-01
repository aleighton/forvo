import { AxiosInstance } from "axios";
import { serializeParams } from "../utils.js";

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
        const params = serializeParams({ "key":this.apiKey, "format": this.returnFormat, "action":"standard-pronunciation", word, language });
        const response = await this.axios.get(params);
        return response.data;
    } catch (error) {
        console.error("Error fetching standard pronunciation:", error);
        throw new Error("Failed to fetch data from Forvo API");
    }
  }
}