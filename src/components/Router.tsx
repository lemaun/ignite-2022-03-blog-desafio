import { Routes, Route } from 'react-router-dom'
import { Post } from '../pages/Post'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home/>} />
        <Route path="post/:id" element={<Post/>} />
      </Route>
    </Routes>
  )
}