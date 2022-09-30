import { ArrowArcLeft, Calendar, Chat, GithubLogo, Link } from "phosphor-react";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header";
import { BlogContext } from "../../contexts/BlogContext";
import { dateRelativeToNow } from "../../utils/formatter";
import { BoardHeader, DetailItem, PostBoard, PostContainer, PostDetails, PostTitle } from "./styles";

export function Post() {
  const { fullPost } = useContext(BlogContext)

  const daysFrom = dateRelativeToNow(fullPost.created_at)

  return (
    <div>
      <Header />
      <PostBoard>
        <BoardHeader>
          <div><NavLink to="/"><ArrowArcLeft size={16}/> VOLTAR</NavLink></div>
          <div><a target="_blank" href={fullPost.html_url}>VER NO GITHUB <Link size={16}/></a></div>
        </BoardHeader>

        <PostTitle>{fullPost.title}</PostTitle>

        <PostDetails>
          <DetailItem>
            <GithubLogo weight="fill" /> <span>{fullPost.user.login}</span>
          </DetailItem>
          <DetailItem>
            <Calendar weight="fill" /> <span>{daysFrom}</span>
          </DetailItem>
          <DetailItem>
            <Chat weight="fill" /> <span>{fullPost.comments} comentários</span>
          </DetailItem>
        </PostDetails>        
      </PostBoard>
      <PostContainer>
        <ReactMarkdown children={fullPost.body} />
      </PostContainer>
    </div>
  )
}