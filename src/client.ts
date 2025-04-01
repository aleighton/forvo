import axios, {AxiosInstance} from 'axios';
import * as endpoints from "./endpoints/index.js";

export default class ForvoClient {
    private apiKey: string;
    private axiosInstance: AxiosInstance;

    public StandardPronunciation: endpoints.StandardPronunciation;
    public WordPronunciations: endpoints.WordPronunciations;
    public LanguageList: endpoints.LanguageList;
    public LanguagePopular: endpoints.LanguagePopular;
    public PopularPronouncedWords: endpoints.PopularPronouncedWords;
    public PronouncedWordsSearch: endpoints.PronouncedWordsSearch;
    public WordsSearch: endpoints.WordsSearch;


    constructor(apiKey: string, returnFormat: string){
        this.apiKey = apiKey;
        this.axiosInstance = axios.create({
          baseURL: "https://apifree.forvo.com",
          timeout: 5000,
        });

        this.StandardPronunciation = new endpoints.StandardPronunciation(this.axiosInstance, this.apiKey, returnFormat)
        this.WordPronunciations = new endpoints.WordPronunciations(this.axiosInstance, this.apiKey, returnFormat)
        this.LanguageList = new endpoints.LanguageList(this.axiosInstance, this.apiKey, returnFormat);
        this.LanguagePopular = new endpoints.LanguagePopular(this.axiosInstance, this.apiKey, returnFormat);
        this.PopularPronouncedWords = new endpoints.PopularPronouncedWords(this.axiosInstance, this.apiKey, returnFormat);
        this.PronouncedWordsSearch = new endpoints.PronouncedWordsSearch(this.axiosInstance, this.apiKey, returnFormat);
        this.WordsSearch = new endpoints.WordsSearch(this.axiosInstance, this.apiKey, returnFormat);
    }
}