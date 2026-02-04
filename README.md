### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/github-repos-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Success](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Loading](https://assets.ccbp.in/frontend/content/react-js/github-repos-lg-loading-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Failure](https://assets.ccbp.in/frontend/content/react-js/github-repos-error-view-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the app is opened initially,

  - An HTTP GET request should be made to **githubReposApiUrl** with query parameter as `language` and its initial value as `ALL`
  - **_loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the repositories list received in the response

- When a language filter is active

  - An HTTP GET request should be made to the above-mentioned URL with the `id` of the active language
  - **_loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the repositories list received in the response

- The `GithubPopularRepos` component is provided with `languageFiltersData`. It consists of a list of language filter objects with the following properties in each language filter object

  |   Key    | Data Type |
  | :------: | :-------: |
  |    id    |  String   |
  | language |  String   |

</details>

<details>

<summary>API Requests & Responses</summary>
<br>

**githubReposApiUrl**

#### API: `https://apis.ccbp.in/popular-repos`

#### Example: `https://apis.ccbp.in/popular-repos?language=ALL`

#### Method: `GET`

#### Description:

Returns a response containing the list of repositories

#### Response

```json
{
  "popular_repos": [
    {
	  "name": "freeCodeCamp",
      "id": 28457823,
      "issues_count": 154,
      "forks_count": 26651,
      "stars_count": 331304,
      "avatar_url": "https://avatars.githubusercontent.com/u/9892522?v=4"
    },
      ...
  ],
}
```

</details>

ed code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
