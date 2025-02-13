import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants.jsx';

import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{position:'sticky', top:'0', justifyContent:'space-between',
      background:'#000'


    }}
    
    >
      <Link to="/" style={{display:'flex', alignItems:'center' }}> 
      <img src={logo} alt="logo" height={45} />
      </Link>

<SearchBar />

    </Stack>
  )
}

export default Navbar
