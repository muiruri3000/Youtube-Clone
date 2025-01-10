import { Stack, Box } from "@mui/material"
import PropTypes from "prop-types"
import {ChannelCard,Loader,VideoCard} from "./"


const Videos = ({videos, direction}) => {

    if (!videos?.length) return <Loader/>;

  return (
    <Stack
    direction={direction || 'row'}
    flexWrap='wrap' justifyContent='center'
    alignItems='start'
    gap={2}
    >

      {
        videos.map((item,idx)=>(
            <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail ={item}/>}
   </Box>
        ))
      }
    </Stack>

  )
}
Videos.propTypes = {
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.shape({
          videoId: PropTypes.string,
          channelId: PropTypes.string,
        }),
      })
    ),
    direction: PropTypes.string,
  };
  
export default Videos
