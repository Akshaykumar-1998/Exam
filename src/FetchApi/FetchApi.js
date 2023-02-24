import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'

const  FetchApi= () => {
  return (
    <>
    <h1> Welcome Fetch Api</h1>
        <Search/>
        <Pagination/>
        <Stories/>
    </>
  )
}

export default  FetchApi;
