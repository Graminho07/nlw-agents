import { useQuery } from '@tanstack/react-query'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-repsonse'

export function useRoomQuestions(roomId: string) {
  return useQuery<GetRoomQuestionsResponse>({
    queryKey: ['questions', roomId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3333/rooms/${roomId}/questions`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch questions')
      }
      
      return response.json()
    },
  })
}