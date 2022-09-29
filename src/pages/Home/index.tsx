import { Header } from "../../components/Header";
import { PostItem } from "../../components/PostItem";
import { ProfileBoard } from "../../components/ProfileBoard";
import { SearchForm } from "../../components/SearchForm";
import { PostsContainer, PostsList } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
      <ProfileBoard />
      <PostsContainer>
        <SearchForm />
        <PostsList>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </PostsList>
      </PostsContainer>
    </div>
  )
}