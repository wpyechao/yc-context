import * as React from 'react'
import create from './index'

export interface IDemoProps {
  count: number
}

type TRes = {
  state: number,
  set: React.Dispatch<React.SetStateAction<number>>
}

const [withProvider, useContext] = create<TRes>(() => {
  const [state, set] = React.useState(0)

  return {
    state,
    set
  }
})

const Demo: React.FC<IDemoProps> = (props) => {

  const { state, set } = useContext()

  return (
    <div>
      demo
    </div>
  )
}

const DDDemo = withProvider<IDemoProps>(Demo)

export default () => {
  return (
    <DDDemo count={1} />
  )
}
