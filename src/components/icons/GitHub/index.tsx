import React from 'react'
import styled from 'styled-components'

const path = `M25 5C13.955 5 5 13.955 5 25C5 34.3717 11.4533 
42.2133 20.1533 44.3833C20.06 44.1133 20 43.8 20 43.4117V39.9933C19.1883 
39.9933 17.8283 39.9933 17.4867 39.9933C16.1183 39.9933 14.9017 39.405 
14.3117 38.3117C13.6567 37.0967 13.5433 35.2383 11.92 34.1017C11.4383 
33.7233 11.805 33.2917 12.36 33.35C13.385 33.64 14.235 34.3433 15.035 
35.3867C15.8317 36.4317 16.2067 36.6683 17.695 36.6683C18.4167 36.6683 
19.4967 36.6267 20.5133 36.4667C21.06 35.0783 22.005 33.8 23.16 33.1967C16.5 
32.5117 13.3217 29.1983 13.3217 24.7C13.3217 22.7633 14.1467 20.89 15.5483 
19.3117C15.0883 17.745 14.51 14.55 15.725 13.3333C18.7217 13.3333 20.5333 
15.2767 20.9683 15.8017C22.4617 15.29 24.1017 15 25.825 15C27.5517 15 29.1983 
15.29 30.695 15.805C31.125 15.2833 32.9383 13.3333 35.9417 13.3333C37.1617 
14.5517 36.5767 17.76 36.1117 19.3233C37.505 20.8983 38.325 22.7667 38.325 
24.7C38.325 29.195 35.1517 32.5067 28.5017 33.195C30.3317 34.15 31.6667 36.8333 
31.6667 38.855V43.4117C31.6667 43.585 31.6283 43.71 31.6083 43.8583C39.4017 
41.1267 45 33.7267 45 25C45 13.955 36.045 5 25 5Z`

export default function GitHubIcon({ size = 50 }: { size?: number }) {
  return (
    <Icon width={size} height={size} viewBox='0 0 50 50' fill='none'>
      <path d={path} fill='currentColor' />
    </Icon>
  )
}

const Icon = styled.svg``