
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Box from '@mui/material/Box'


import { Feed,VideoDetail,ChannelDetail,SearchFeed,Navbar } from './components';



const App = () =>{
  return (


  <BrowserRouter>
    <Box sx={{background:'#000', color:'white'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail />} />

        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
)
}




export default App
