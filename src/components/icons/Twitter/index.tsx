import React from 'react'
import styled from 'styled-components'

const path = `M46.6668 11.5616C45.0718 12.27 43.3585 12.7466 41.5601 
12.9616C43.3968 11.8616 44.8051 10.12 45.4685 8.04331C43.7518 9.06164 
41.8485 9.80164 39.8218 10.2016C38.2001 8.47331 35.8901 7.39331 33.3335 
7.39331C28.4235 7.39331 24.4435 11.375 24.4435 16.2833C24.4435 16.98 24.5235 
17.66 24.6735 18.3083C17.2851 17.9383 10.7351 14.3983 6.34845 9.01831C5.58512 
10.3316 5.14679 11.8583 5.14679 13.49C5.14679 16.5733 6.71512 19.295 9.10012 
20.8883C7.64345 20.8416 6.27179 20.4416 5.07345 19.7766C5.07345 19.815 5.07345 
19.85 5.07345 19.8883C5.07345 24.1966 8.13679 27.79 12.2051 28.605C11.4601 28.8083 
10.6735 28.9166 9.86179 28.9166C9.29012 28.9166 8.73179 28.86 8.19012 28.7583C9.32179 
32.29 12.6051 34.8616 16.4951 34.9333C13.4535 37.3183 9.62012 38.74 5.45345 
38.74C4.73679 38.74 4.02845 38.6983 3.33179 38.615C7.26679 41.1366 11.9385 42.6083 
16.9601 42.6083C33.3135 42.6083 42.2535 29.0616 42.2535 17.3133C42.2535 16.9283 
42.2451 16.545 42.2285 16.1633C43.9668 14.9083 45.4751 13.3433 46.6668 11.5616Z`

export default function TwitterIcon({ size = 50 }: { size?: number }) {
  return (
    <Icon width={size} height={size} viewBox='0 0 50 50' fill='none'>
      <path d={path} fill='currentColor' />
    </Icon>
  )
}

const Icon = styled.svg``