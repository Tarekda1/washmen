import { SWRConfig } from "swr";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./App.css";
import Header from "./Components/Header";
import Partners from "./Components/Partners";
import Search from "./Components/Search";

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Container maxWidth="large">
          <Header>Partners Finder</Header>
          <Search />
          <Partners />
        </Container>
      </Box>

    </SWRConfig>
  );
}

export default App;
