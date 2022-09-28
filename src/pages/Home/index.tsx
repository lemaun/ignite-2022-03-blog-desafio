import { Header } from "../../components/Header";
import { ProfileBoard } from "../../components/ProfileBoard";
import { SearchForm } from "../../components/SearchForm";
import { PostsContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
      <ProfileBoard />
      <PostsContainer>
        <SearchForm />
      </PostsContainer>
    </div>
  )
}