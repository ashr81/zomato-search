import React from "react"
import ContentLoader from "react-content-loader";
import { Flex } from '../components/atoms';

const SearchListLoader = () => (
  <Flex width='100%' height='60px'>
    <ContentLoader 
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="8" y="8" rx="0" ry="0" width="50" height="50" /> 
      <rect x="72" y="8" rx="0" ry="0" width="124" height="18" /> 
      <rect x="72" y="32" rx="0" ry="0" width="138" height="12" /> 
      <rect x="308" y="8" rx="0" ry="0" width="30" height="30" /> 
      <rect x="308" y="43" rx="0" ry="0" width="20" height="12" />
    </ContentLoader>
  </Flex>
)

export default SearchListLoader