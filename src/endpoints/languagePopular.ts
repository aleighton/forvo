import { AxiosInstance } from "axios";
import { serializeParams } from "../utils.js";

export default class LanguagePopular {
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
   * @param order Values: "popular", "name" or "code". Default is "popular". (optional)
   * @param limit Values: any integer number. Max. languages returned. Default is 10. (optional)
   * @returns Promise with API response.
   */
  async fetch(search: string, language?: string, order?: string, limit?: number) {
    try {
      const params = serializeParams({ "key":this.apiKey, "format":this.returnFormat, "action":"language-popular", language, order, limit })
      const response = await this.axios.get(params);
      return response.data;
    } catch (error) {
      console.error("Error fetching popular languages:", error);
      throw new Error("Failed to fetch data from Forvo API");
    }
  }
}