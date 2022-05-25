import { Routes, Route } from 'react-router-dom'

import NewsList from 'pages/NewsList/NewsList'
import NewsDetail from 'pages/NewsDetail/NewsDetail'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<NewsList />} />
      <Route path='/:id' element={<NewsDetail />} />
    </Routes>
  )
}

export default Router
