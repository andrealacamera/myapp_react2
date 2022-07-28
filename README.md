# myapp_react2

This is another demo app, made (again) just for fun!
It is based on the [first one](https://github.com/andrealacamera/myapp_react1)

Here I used the following packages|libs|things (new ones highlighted):

- CRA
- TailwindCSS
- React Router
- [**React Redux**](https://react-redux.js.org/) and [**Redux Toolkit**](https://redux-toolkit.js.org/)

I follow both the tutorial on Redux Toolkit website and this [video](https://www.youtube.com/watch?v=PmFVQmSSaE4&list=PLQg6GaokU5CyvExiaMgXP_BS5WWNBfZJN&index=15) and I mixed some things: in this app I create a `src/redux` folder and put there every settings of the store (i.e. the store definition, the slicers, etc).

## Configure the store (w/ Redux Toolkit)

1. Create a Redux State Slice
Add a new file named `src/redux/counterSlice.js`. Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

**Important! Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes**.

_We export separately the actions and the reducer, because we do not want to export the entire slice and then destructure each part of it. In the following we directly use the reducer (as well as the actions)._

2. Configure the Store and Add the Slice Reducer to it, in `src/redux/store.js`

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

_If you want to use several slice reducers, `configureStore` will automatically create the root reducer by passing the object `reducer` to the Redux combineReducers utility. You do not should do this by hand._

3. Provide the Redux Store to React in `index.js`
```js
...
import { Provider } from 'react-redux'
import { store } from './redux/store'
...
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

4. Use Redux State and Actions in React Components
```js
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
...
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
...
  <p>Count: {count}</p>
  <button onClick={() => dispatch(increment())}>Increment</button>
  <button onClick={() => dispatch(decrement())}>Decrement</button>
...
```

_Note that you can use `useSelector` in one component and `useDispatch` in another one. The Redux store keeps each component updated._

---
## Some other stuff...

### **Disable open browser in CRA**
- Create .env file in the root directory where your package.json file resides;  
- Add `BROWSER=none` and save the file;
- run `npm start` as always. 


### Fetch data from API 1/2

A **thunk** is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:

- An inside thunk function, which gets `dispatch` and `getState` as arguments.
- The outside creator function, which creates and returns the thunk function.

Using thunks requires that the `redux-thunk` _middleware_ (a type of plugin for Redux) be added to the Redux store when it's created. 
Note that Redux Toolkit's `configureStore` function already sets that up for us automatically.

I will use RTK from here, so I'm not interested in following the basic approach of **thunks**. See [this](https://redux.js.org/tutorials/essentials/part-5-async-logic) for more information. 

### Interlude: Use a (local) API 
In order to simulate your API you can use `json-server`.  

1. Install with `npm i -g json-server` 
2. Create a `db.json` file with some data (in some folder, if you prefer)
3. Start JSON Server `json-server --watch db.json --port 3666` (default port is 3000)

More details on [this page](https://www.npmjs.com/package/json-server).

### Fetch data from API 2/2

**RTK Query** (See [here](https://redux-toolkit.js.org/tutorials/rtk-query) and [here](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)) eliminates the need to hand-write data fetching & caching logic yourself. See also [this very useful YT video](https://www.youtube.com/watch?v=HyZzCHgG3AY). 

#### Create the API service

In order to query an API, we should create a service in which we define the `endpoints`: either **queries** (to GET the data) or **mutations** (to POST, PUT/PATCH, DELETE the data). The endpoints are defined using a callback function that accepts a `builder` parameter and returns an object containing endpoint definitions created with `builder.query()` and `builder.mutation()`.

RTK Query's React integration will automatically generate React hooks for every endpoint we define! 

The service is a Redux Slice, you can name it `apiSlice.js` or what else.

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// this is specific for React 
...

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  // defaults path is 'api', so all your RTKQ cache data will be stored under state.api.
  reducerPath: 'api',
  //fetchBaseQuery is a small wrapper around the standard fetch()
  baseQuery: fetchBaseQuery({ baseUrl: 'https://your-API-server/api/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `users`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
//
// The hooks are automatically named based on a standard convention:
// - use, the normal prefix for any React hook
// - The name of the endpoint, capitalized
// - The type of the endpoint, Query or Mutation
//
export const { useGetAllUsersQuery } = apiSlice
```

#### Add the service to the store

_Note: in the mentioned YT video, the author directly imports the apiSlice in the `index.js` file, by using the `<ApiProvider>` tag and encapsulating the `<App />` with it. See [this](https://redux-toolkit.js.org/rtk-query/api/ApiProvider) page if you want to use this approach._

_Here I prefer to follow the standard documentation, in order to use the apiSlice together with the other reducers defined in my project._

An RTKQ service generates a "slice reducer" that should be included in the Redux root reducer, and a custom middleware that handles the data fetching. Both need to be added to the Redux store, defined in `/redux/store.js`.

The API slice generates a custom middleware that needs to be added to the store. This middleware **must** be added as well - it manages cache lifetimes and expiration.

We can reuse the `apiSlice.reducerPath` field as a computed key in the reducer parameter, to ensure that the caching reducer is added in the _right_ place.

```js
import { apiSlide} from './apiSlice';
...

export default configureStore({
  reducer: {
    ...
    ...
    ...
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
```



#### Using Query/Mutation hook in components

Each generated query hook returns a "result" object containing several fields, including:

- `data`: the actual response contents from the server. **This field will be undefined until the response is received**. It's common to destructure fields from the result object, and possibly rename data to a more specific variable like users to describe what it contains. (e.g. `data: users`);
- `isLoading`: a boolean indicating if this hook is currently making the first request to the server. (Note that if the parameters change to request different data, isLoading will remain false.);
- `isFetching`: a boolean indicating if the hook is currently making any request to the server;
- `isSuccess`: a boolean indicating if the hook has made a successful request and has cached data available (ie, data should be defined now);
- `isError`: a boolean indicating if the last request had an error;
- `error`: a serialized error object.

```js
import { useGetAllUsersQuery } from '../redux/apiSlice'
...

const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllUsersQuery()
...
```

#### Add-ons to the apiSlice.
From here, you can add some other features, such as: 
- Other queries (single user, other data, etc.). See [here](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#displaying-individual-posts).
- Change the data by defining and using `mutations`. See [here](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#creating-posts-with-mutations).
- Refresh the cached data. Indeed, we need to tell RTK Query to refresh its cached data so that we can see the new data we just added. See [here](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#refreshing-cached-data).
- Transform the response. See the YT video as well as [here](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformresponse).
