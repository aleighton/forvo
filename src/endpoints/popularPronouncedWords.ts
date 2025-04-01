import { AxiosInstance } from "axios";
import { serializeParams } from "../utils.js";

export default class PopularPronouncedWords {
  private axios: AxiosInstance;
  private apiKey: string;
  private returnFormat: string;

  constructor(axiosInstance: AxiosInstance, apiKey: string, returnFormat: string) {
    this.axios = axiosInstance;
    this.apiKey = apiKey;
    this.returnFormat = returnFormat;
  }

  /**
   * Fetch pronunciations for a given word.
   * @param search - The word to fetch pronunciations for.
   * @param language. To get only the words in the given language. Check all the values in this languages codes list (optional)
   * @param limit Values: any integer number. Max. word returned. Default is 1000.pagesize. Values: any integer number between 1-100. Set the page size in results. Default is 20 (optional)
   * @returns Promise with API response.
   */
  async fetch(search: string, language?: string, limit?: number) {
    try {
      const params = serializeParams({ "key":this.apiKey, "format":this.returnFormat, "action":"popular-pronounced-words", search, language, limit })
      const response = await this.axios.get(params);
      return response.data;
    } catch (error) {
      console.error("Error fetching popular pronounced words:", error);
      throw new Error("Failed to fetch data from Forvo API");
    }
  }
}