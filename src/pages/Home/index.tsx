import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PostItem } from "../../components/PostItem";
import { ProfileBoard } from "../../components/ProfileBoard";
import { SearchForm } from "../../components/SearchForm";
import { BlogContext } from "../../contexts/BlogContext";
import { PostsContainer, PostsList } from "./styles";

export function Home() {

  const { posts } = useContext(BlogContext)

  return (
    <div>
      <Header />
      <ProfileBoard />
      <PostsContainer>
        <SearchForm />
        <PostsList>
          { posts.map(post => {
            return (<PostItem key={post.number} {...post} />)
          })}
        </PostsList>
      </PostsContainer>
    </div>
  )
}