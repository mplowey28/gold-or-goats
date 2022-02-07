import { createContext, useContext, useMemo, useReducer } from 'react'

const SimContext = createContext<
  { state: ISimParams; dispatch: IDispatch } | undefined
>(undefined)

const reducerSim = (state: ISimParams, action: IAction): ISimParams => {
  switch (action.type) {
    case 'setSimParams':
      return {
        ...state,
        rounds: action.payload.rounds,
        switch: action.payload.switch,
      }
    default:
      throw new Error('Invalid action type in context.')
  }
}

const useSimParams = () => {
  const simParams = useContext(SimContext)

  return simParams
}

const SimContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducerSim, {})
  const memoizedParams = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <SimContext.Provider value={memoizedParams}>{children}</SimContext.Provider>
  )
}

export { SimContextProvider, useSimParams }
