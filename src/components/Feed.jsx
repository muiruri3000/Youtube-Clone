import { useState,useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import {Videos,Sidebar} from "./"

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null); 

  useEffect(() => {
  setVideos(null);
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  .then((data)=>setVideos(data.items))

 
  }, [selectedCategory]);




  return (
    <Stack
    sx={{
      flexDirection:{sx:'column', md:'row'}
    }}
    >
<Box sx={{ 
    height: { sx: 'auto', md: '92vh' }, 
    borderRight: '1px solid #3d3d3d', 
    px: { sx: 0, md: 2 }, 
    display: 'flex', 
    flexDirection: 'column' 
}}>
  <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
  </Box>

  <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff', textAlign: 'center' }}>
    &copy; 2025 JosMedia
  </Typography>
</Box>



    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
        

    </Box>

    </Stack>
  )
}

export default Feed
