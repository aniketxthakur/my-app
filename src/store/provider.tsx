"use client"
import { Provider } from 'react-redux'
import store from './store'


export default function App (props:any) {
  return (
        <Provider store={store}>
          {props.children}
        </Provider>
  )
}