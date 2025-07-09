/** biome-ignore-all assist/source/organizeImports: test */
/** biome-ignore-all lint/correctness/noUnusedImports: test */
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CreateRoom } from "./pages/create-room"
import { Room } from "./pages/room"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId"/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  ) 
}

export default App
