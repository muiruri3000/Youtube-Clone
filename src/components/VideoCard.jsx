import { Link } from "react-router-dom"
import PropTypes from "prop-types"



import { CardContent,Typography,Card, CardMedia } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { demoChannelUrl,demoThumbnailUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle } from "../utils/constants"



const VideoCard = ({video: {id:{videoId},snippet}}) => {
  return (
    <Card
    sx={{
        borderRadius:0,
        boxShadow:'none',
        width:{
            xs:'100%',
            sm:'358px',
            md:'320px'
        }
    }}
    >
      <Link to={videoId ? `/video/${videoId}`: `/video/cV2gBU6hKfY`}>
      <CardMedia
      image ={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
      alt={snippet?.title}
      sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      >

      </CardMedia>
</Link>
<CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleOutlineIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
    </Card>
  )
}
VideoCard.propTypes = {
    video: PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string,
      }),
      snippet: PropTypes.shape({
        title: PropTypes.string,
        channelId: PropTypes.string,
        channelTitle: PropTypes.string,
        thumbnails: PropTypes.shape({
          high: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
    }).isRequired,


}
export default VideoCard
