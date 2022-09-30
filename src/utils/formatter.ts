import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBr from 'date-fns/locale/pt-BR'

export function dateRelativeToNow(date: string) {
  return formatDistanceToNow(new Date(date), 
    {
      locale: ptBr
    }
  )
}
