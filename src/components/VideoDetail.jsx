import { useEffect,useState } from "react"

import { Link,useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography,Box,Stack } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import {Videos,Loader} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {
  const {id} = useParams(); 
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    // Fetch related videos and video details in parallel
    const fetchData = async () => {
      try {
        // Fetch related videos
        const relatedVideosData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`);
        if (relatedVideosData?.items?.length > 0) {
          setVideos(relatedVideosData.items);
        }
  
        // Fetch video details
        const videoDetailsData = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
        if (videoDetailsData?.items?.length > 0) {
          setVideoDetail(videoDetailsData.items[0]);
        }
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call the fetch function
    fetchData();
  
  }, [id]); // Dependency on 'id'
  
  console.log('id is: ', id);

  if (!videoDetail?.snippet || !videoDetail?.statistics) return <Loader />;
const {snippet:{title,channelId,channelTitle}, statistics:{viewCount,likeCount}} = videoDetail;


  return (
        <Box minHeight='95vh'>
          <Stack direction={{xs:'column',md:'row'}}>
            <Box flex={1}>
            <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
              <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls/>
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                {title}
              </Typography>
              <Stack
              direction='row' 
              justifyContent='space-between'
              sx={{
                color:'#fff'
              }}
              py={1}
              px={2}
              >
                <Link 
                to={`/channel/${channelId}`}
                >
                  <Typography
                  variant={{sm:'subtitle1',md:'h6'}} 
                  color='#fff'
                  >
                    {channelTitle}
                    <CheckCircleOutlineIcon 
                    sx={{fontSize:'12px', color:'gray', ml:'5px'}}
                    />

                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography
                  variant="body1" sx={{opacity:'0.7'}}
                  >
                    {parseInt(viewCount).toLocaleString()} likes
                  </Typography>
                  <Typography
                  variant="body1" sx={{opacity:'0.7'}}
                  >
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>

                </Stack>
              </Stack>
            </Box>
            </Box>
            <Box px={2} py={{md:1, sx:5}} justifyContent='center' alignItems='center'>
              <Videos videos={videos} direction='column'/>

            </Box>
          </Stack>

        </Box>
  )
}

export default VideoDetail
