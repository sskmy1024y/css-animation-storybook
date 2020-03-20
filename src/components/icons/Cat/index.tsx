import React from 'react'
import { Colors } from 'libs/Colors'

export * from './Outline'

const path = `M11.4797 0.151609C12.8097 -0.284427 14.7098 1.29167 15.8498 2.43169C16.852 3.43382 17.9275 5.09665 18.173 5.48425C19.0231 5.43692 19.8946 5.41365 20.7853 5.41365C24.3382 5.41365 27.8899 6.2494 30.9995 7.695C31.6236 7.34285 33.8745 6.09178 34.865 5.7977C35.0046 5.75625 35.1527 5.70959 35.3072 5.66091C36.4318 5.30649 37.898 4.84445 38.9403 5.49867C40.1258 6.24275 39.8705 9.08182 39.6954 10.9819C39.5516 12.5417 39.2597 14.0374 39.1598 14.5231C40.2831 16.3345 40.9259 18.3291 40.9259 20.4241C40.9259 32.4522 31.9087 35.4344 20.7853 35.4344C9.66204 35.4344 0.0793457 28.7141 0.0793457 20.4241C0.0793457 14.0844 3.09353 9.98139 8.08694 7.69395C8.20591 7.03674 8.69125 4.44127 9.10464 3.4767C9.16201 3.34283 9.22077 3.19915 9.28208 3.04922C9.72843 1.95781 10.3103 0.53498 11.4797 0.151609Z`

interface Props {
  width?: number
  height?: number
}

export default function CatIcon({ width = 41, height = 36 }: Props) {
  return (
    <svg width={width} height={height} viewBox='0 0 41 36'>
      <path fillRule='evenodd' clipRule='evenodd' d={path} fill={Colors.brand} />
    </svg>
  )
}
