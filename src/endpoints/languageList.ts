import { AxiosInstance } from "axios";
import { serializeParams } from "../utils.js";

export default class LanguageList {
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
   * @param language Values: Language code or "native" to get the language list with the names of the languages in their native languages. Default is English (en). (optional)
   * @param order Values: "name" or "code". Default is "name". (optional)
   * @param min_pronunciations Values: any integer number. To get only the languagues with, at least, the given number of pronunciations. (optional)
   * @returns Promise with API response.
   */
  async fetch(search: string, language?: string, order?: string, min_pronunciations?: number) {
    try {
      const params = serializeParams({ "key":this.apiKey, "format":this.returnFormat, "action":"language-list", language, order, "min-pronunciations":min_pronunciations })
      const response = await this.axios.get(params);
      return response.data;
    } catch (error) {
      console.error("Error fetching language list:", error);
      throw new Error("Failed to fetch data from Forvo API");
    }
  }
}