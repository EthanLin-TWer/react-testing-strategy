import { useCallback } from 'react'
import { AnyAction, Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

import { StoreState } from '../../redux'
import { HomeState, loaded } from '../../redux/home-reducers'

interface Result {
  data: StoreState['home']
  setLoaded(): void
}

export const useHomeReducer = (): Result => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const data: HomeState = useSelector((store: StoreState) => store.home)

  const setLoaded = useCallback(() => {
    dispatch(loaded())
  }, [])

  return { data, setLoaded }
}
