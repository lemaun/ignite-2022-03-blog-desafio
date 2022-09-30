import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../contexts/BlogContext";
import { dateRelativeToNow } from "../../utils/formatter";
import { PostContent, PostHeader } from "./styles";
import ReactMarkdown from "react-markdown";

interface Post {
  body: string;
  created_at: string;
  number: number;
  title: string;
}

export function PostItem(post:Post) {

  const fragment = post.body.substring(0, 160)+'...'
  const daysFrom = dateRelativeToNow(post.created_at)

  const {getPost} = useContext(BlogContext)

  const navigate = useNavigate()

  function handleNavigate() {
    const url = post.title.replaceAll(' ','-')
    navigate(`/post/${post.number}`)
    getPost(post.number)
  }

  return (
    <PostContent onClick={handleNavigate}>
      <PostHeader>
        <h2>{post.title}</h2>
        <span>{daysFrom}</span>
      </PostHeader>
      <ReactMarkdown children={fragment} />
    </PostContent>
  )
}