import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { FormContent, FormTitle } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { posts, fetchPosts } = useContext(BlogContext)

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <FormContent onSubmit={handleSubmit(handleSearchPosts)}>
      <FormTitle>
        <h2>Publicações</h2>
        <span>{ posts.length } publicações</span>
      </FormTitle>
      <input 
        type="text" 
        placeholder="Buscar conteúdo" 
        {...register('query')}
      />
    </FormContent>
  )
}