import PropTypes from "prop-types";


import { Box,CardContent, CardMedia, Typography } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";
import {  demoProfilePicture } from "../utils/constants";




const ChannelCard = ({channelDetail, marginTop='0'}) => {
    


    return (
    <Box
    
    sx={{
        boxShadow :'none',
        borderRadius : '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs:'356px', md:'320px'},
        height:'320px',
        margin:'auto',
        marginTop,
    }}
    
    
    >
  <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleOutlineIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
    </Box>
)
}

ChannelCard.propTypes = {
    channelDetail : PropTypes.shape({
        id:PropTypes.shape({
            channelId:PropTypes.string,
        }),
        snippet: PropTypes.shape({
            title:PropTypes.string,
    
            thumbnails:PropTypes.shape({
                high:PropTypes.shape({
                    url:PropTypes.string
                }),
            }),
        }),
        statistics:PropTypes.shape({
            subscriberCount:PropTypes.number
        }),
    }),
 
    marginTop: PropTypes.string
}
export default ChannelCard
