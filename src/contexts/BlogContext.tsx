import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface Post {
  html_url: string;
  body: string;
  created_at: string;
  number: number;
  title: string;
}

interface FullPost {
  html_url: string;
  body: string;
  created_at: string;
  number: number;
  title: string;
  user: {
    login: string;
  }
  comments: number;
}

interface Profile {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  login: string;
  html_url: string;
  company: string;
}

interface BlogProviderProps {
  children: ReactNode
}

interface BlogContextType {
  posts: Post[];
  fullPost: FullPost;
  user: Profile;
  fetchPosts: (query?: string) => Promise<void>;
  getPost: (number?: number) => Promise<void>;
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [user, setUser] = useState({} as Profile)
  const [fullPost, setFullPost] = useState({} as FullPost)

  const username = 'lemaun'
  const repo = 'ignite-2022-03-blog-desafio'

  async function fetchPosts(query = '') {
    const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`)
    setPosts(response.data.items)
  }

  async function getPost(number = 1) {
    const response = await api.get(`/repos/${username}/${repo}/issues/${number}`)
    setFullPost(response.data)
  }

  async function getUser() {
    const response = await api.get(`users/${username}`)
    setUser(response.data)
  }

  useEffect(() => {
    getUser()
  },[])

  useEffect(() => {
    getPost()
  },[])

  useEffect(() => {
    fetchPosts()
  },[])

  return (
    <BlogContext.Provider
      value={{ posts, fullPost, user, fetchPosts, getPost }}
    >
      {children}
    </BlogContext.Provider>
  )
}