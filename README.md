# myapp_react2

This is another demo app, made (again) just for fun!
It is based on the [first one](https://github.com/andrealacamera/myapp_react1)

Here I used the following packages|libs|things (new ones highlighted):

- CRA
- TailwindCSS
- React Router
- [**React Redux**](https://react-redux.js.org/) and [**Redux Toolkit**](https://redux-toolkit.js.org/)

I follow both the tutorial on Redux Toolkit website and this [video](https://www.youtube.com/watch?v=PmFVQmSSaE4&list=PLQg6GaokU5CyvExiaMgXP_BS5WWNBfZJN&index=15) and I mixed some things: in this app I create a `src/redux` folder and put there every settings of the store (i.e. the store definition, the slicers, etc).
- 
## Configure the store (w/ Redux Toolkit)
1. Create the store in `src/redux/store.js`
```js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

2. Provide the Redux Store to React in `index.js`
```js
...
import { store } from './redux/store'
import { Provider } from 'react-redux'
...
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

3. Create a Redux State Slice
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

Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library, which detects changes to a "draft state" and produces a brand new immutable state based off those changes.


4. Add Slice Reducers to the Store `src/redux/store.js`

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

5. Use Redux State and Actions in React Components
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
```

---
## Final notes

### **Disable open browser in CRA**
- Create .env file in the root directory where your package.json file resides;  
- Add `BROWSER=none` and save the file;
- run `npm start` as always. 