import { AxiosInstance } from "axios";
import { serializeParams } from "../utils.js";

export default class WordPronunciations {
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
   * @param word - The word to fetch pronunciations for.
   * @param language - The language code, ISO format (optional)
   * @param country - The country code, ISO Alpha-3 format (optional)
   * @param username - Filters results for those by specific username (optional)
   * @param sex - The gender of the user pronouncing the word "m" || "f" (optional)
   * @param rate - Filters results for pronunciations rated with at least the given value. Any positive integer value (optional)
   * @param order - Orders results by specific field asc || desc. Values are "date-desc" || "date-asc" || "rate-desc" || "rate-asc" (optional)
   * @param limit - Specifies maximum number of results returned in single request. Any positive integer value (optional)
   * @returns Promise with API response.
   */
  async fetch(word: string, language?: string, country?: string, username?: string, sex?: string, rate?: number, order?: string, limit?: number, group_in_languages: string = "false") {
    try {
      const params = serializeParams({ "key":this.apiKey, "format":this.returnFormat, "action":"word-pronunciations", word, language, country, username, sex, rate, order, limit, "group-in-languages":group_in_languages })
      const response = await this.axios.get(params);
      return response.data;
    } catch (error) {
      console.error("Error fetching word pronunciations:", error);
      throw new Error("Failed to fetch data from Forvo API");
    }
  }
}