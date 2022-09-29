import { BoardContent, DetailItem, Profile, ProfileDetails, ProfileTitle } from "./styles";
import avatar from "../../assets/leandro.jpg";
import { GithubLogo, Buildings, Users, Link } from 'phosphor-react'

export function ProfileBoard() {
  return (
    <BoardContent>
      <img src={avatar} alt="avatar" />
      <Profile>
        <ProfileTitle>
          <h2>Leandro Lago da Silva</h2>
          <a href="#">GITHUB <Link size={16}/></a>
        </ProfileTitle>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <ProfileDetails>
          <DetailItem>
            <GithubLogo weight="fill" /> <span>lemaun</span>
          </DetailItem>
          <DetailItem>
            <Buildings weight="fill" /> <span>Datacampo</span>
          </DetailItem>
          <DetailItem>
            <Users weight="fill" /> <span>58 seguidores</span>
          </DetailItem>
        </ProfileDetails>
      </Profile>
    </BoardContent>
  )
}
