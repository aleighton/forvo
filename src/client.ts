import axios, {AxiosInstance} from 'axios';
import * as endpoints from "./endpoints/index.js";

class ForvoClient {
    private apiKey: string;
    private axiosInstance: AxiosInstance;

    public StandardPronunciation: endpoints.StandardPronunciation


    constructor(apiKey: string, returnFormat: string){
        this.apiKey = apiKey;
        this.axiosInstance = axios.create({
          baseURL: "https://apifree.forvo.com",
          timeout: 5000,
        });

        this.StandardPronunciation = new endpoints.StandardPronunciation(this.axiosInstance, this.apiKey, returnFormat)
    }
}