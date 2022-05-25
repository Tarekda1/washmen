import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./App.css";
import Header from "./Components/Header";
import Partners from "./Components/Partners";
import Search from "./Components/Search";

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: 'flex' }}>
        <Container maxWidth="large">
          <Header>Partners Finder</Header>
          <Search />
          <Partners />
        </Container>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
