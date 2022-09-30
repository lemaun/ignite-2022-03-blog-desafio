import { BoardContent, DetailItem, Profile, ProfileDetails, ProfileTitle } from "./styles";
import { GithubLogo, Buildings, Users, Link } from 'phosphor-react'
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";


interface Profile {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  login: string;
  html_url: string;
  company: string;
}

export function ProfileBoard() {
  const { user } = useContext(BlogContext)

  return (
    <BoardContent>
      <img src={user.avatar_url} alt="avatar" />
      <Profile>
        <ProfileTitle>
          <h2>{user.name}</h2>
          <a href={user.html_url}>GITHUB <Link size={16}/></a>
        </ProfileTitle>
        <p>{user.bio}</p>
        <ProfileDetails>
          <DetailItem>
            <GithubLogo weight="fill" /> <span>{user.login}</span>
          </DetailItem>
          <DetailItem>
            <Buildings weight="fill" /> <span>{user.company}</span>
          </DetailItem>
          <DetailItem>
            <Users weight="fill" /> <span>{user.followers} seguidores</span>
          </DetailItem>
        </ProfileDetails>
      </Profile>
    </BoardContent>
  )
}
