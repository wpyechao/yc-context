import * as React from 'react';
import createContext from 'yc-context'

const [withProvider, useContext] = createContext(() => {
  const [state, set] = React.useState(0)

  return {
    state,
    set
  }
})

const Demo = () => {
  const {state, set} = useContext()

  return (
    <div>
      {state}<br />
      <button onClick={() => set(a => a + 1)}>add</button>
    </div>
  )
}

export default withProvider(Demo)