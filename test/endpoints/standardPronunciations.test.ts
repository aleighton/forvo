import mockAxios from "jest-mock-axios";
import StandardPronunciation from "./../../src/endpoints/standardPronunciation"
import { AxiosInstance } from "axios";

describe("StandardPronunciationsAPI", () => {
  let api: StandardPronunciation;
  let axiosMockInstance: AxiosInstance;

  beforeEach(() => {
    axiosMockInstance = mockAxios as unknown as AxiosInstance;
    api = new StandardPronunciation(axiosMockInstance, "FAKE_API_KEY", "json");
  });

  afterEach(() => {
    mockAxios.reset(); // Reset mock between tests
  });

  it("should fetch standard pronunciations successfully", async () => {
    const mockResponse = { word: "hello", pronunciation: "/həˈloʊ/" };

    // Call the method (this sends a request, but it's intercepted)
    const promise = api.fetch("hello", "en");

    // Simulate API response
    expect(mockAxios.get).toHaveBeenCalledWith(
      "/key/FAKE_API_KEY/format/json/action/standard-pronunciations",
      { params: { word: "hello", language: "en" } }
    );

    // Manually resolve the response
    mockAxios.mockResponse({ data: mockResponse });

    // Await the resolved promise
    await expect(promise).resolves.toEqual(mockResponse);
  });

  it("should throw an error when API call fails", async () => {
    const promise = api.fetch("hello", "en");

    // Simulate an API error
    mockAxios.mockError(new Error("API Failure"));

    // Expect rejection
    await expect(promise).rejects.toThrow("API Failure");
  });
});
