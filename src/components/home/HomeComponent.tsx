import { useHomeReducer } from '../../hooks/redux/useHomeReducer'
import { onMount } from '../../hooks/onMount'

export const HomeComponent = () => {
  const { setLoaded } = useHomeReducer()
  onMount(() => {
    setLoaded()
  })

  return <p>welcome to the home page</p>
}
