import React from 'react'
import ContentLoader from 'react-content-loader'

const RestaurantsLoader = () => {
  return (
    <ContentLoader
      height={600}
      width={600}
      speed={2}
    >
      <rect x="0" y="8" rx="0" ry="0" width="150" height="150" />
      <rect x="220" y="8" rx="0" ry="0" width="100" height="15" />
      <rect x="220" y="30" rx="0" ry="0" width="100" height="15" />
      <rect x="220" y="52" rx="0" ry="0" width="100" height="15" />
      <rect x="400" y="8" rx="0" ry="0" width="50" height="50" />
      <rect x="400" y="65" rx="0" ry="0" width="50" height="15" />
    </ContentLoader>
  )
}

export default RestaurantsLoader