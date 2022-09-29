import { ArrowArcLeft, Calendar, Chat, GithubLogo, Link } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header";
import { BoardHeader, DetailItem, PostBoard, PostContainer, PostDetails, PostTitle } from "./styles";

export function Post() {
  return (
    <div>
      <Header />
      <PostBoard>
        <BoardHeader>
          <a><NavLink to="/"><ArrowArcLeft size={16}/> VOLTAR</NavLink></a>
          <a href="#">VER NO GITHUB <Link size={16}/></a>
        </BoardHeader>

        <PostTitle>JavaScript data types and data structures</PostTitle>

        <PostDetails>
          <DetailItem>
            <GithubLogo weight="fill" /> <span>lemaun</span>
          </DetailItem>
          <DetailItem>
            <Calendar weight="fill" /> <span>Há 1 dia</span>
          </DetailItem>
          <DetailItem>
            <Chat weight="fill" /> <span>8 comentários</span>
          </DetailItem>
        </PostDetails>        
      </PostBoard>
      <PostContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam eius cumque, voluptate pariatur accusantium, sapiente, asperiores iusto consequuntur quia vel id facere at dolor ad! Eius dolor facere maxime!</p>
      </PostContainer>
    </div>
  )
}