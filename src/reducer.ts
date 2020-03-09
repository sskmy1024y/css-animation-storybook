import * as redux from 'redux'

export interface State {
  /* EXAMPLE:
    example: exampleReducer, */
}

export const initialState: State = {}

export function makeRootReducer() {
  const reducers: redux.ReducersMapObject<State | undefined> = {
    /* EXAMPLE:
    example: exampleReducer, */
  }
  return redux.combineReducers<State>({
    ...(reducers as redux.ReducersMapObject<State>)
  })
}
