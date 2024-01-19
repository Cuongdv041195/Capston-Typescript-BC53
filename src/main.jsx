import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/base.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: true,
      // Khi mà user nhấn chuột qua tab khác rồi trỏ lại tab ứng dụng thì mặc định sẽ call lại api
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />

    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
)
