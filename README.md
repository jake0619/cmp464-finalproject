# Final project for CMP464.

![Alt Text](https://media.giphy.com/media/5mqVR6WKTrAaWIsmqA/giphy.gif)

## Personal website built with React.
Features:
  - Kanye West quote generator
  - Weather searching

Tools/methods used:
  - React
  - Hooks (useState, useEffect)
  - React Router DOM
  - AJAX
  - Fetch
  - Weather API

In order for api to function you must: 
  1. create a weatherapi.com account for an api key
  2. add config.js file in src
  3. insert into the config.js:

```json
export default {
  api: {
    weather: <YOUR API KEY>
  },
};
```
