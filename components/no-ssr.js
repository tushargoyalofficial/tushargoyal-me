import dynamic from 'next/dynamic'
import * as React from 'react'

const NoSSR = props => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false
})
