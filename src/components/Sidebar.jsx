import { Stack } from "@mui/material"
import PropTypes from "prop-types"


import { categories } from "../utils/constants"





const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
    direction='row'
    sx={{
        OverflowY:'auto',
        height:{
            sx:'auto', md:"95%"
        },
        flexDirection:{
            md:'column'
        }
    }}
    >
      {
       categories.map((category)=>(
            <button
            className="category-btn"
            onClick={()=>setSelectedCategory(category.name)}
            style={{
                background: category.name === selectedCategory && '#fc1503', color:"white"

            }}
            key={category.name}
            >
                <span style={{color:category.name === selectedCategory ? "white" : "red", marginRight:"15px"}}>{category.icon}</span>
                <span style={{opacity:category.name === selectedCategory ? "1": "0.8"}}>{category.name}</span>
            

            </button>
        ))
      }
    </Stack>
  )
}

Sidebar.propTypes= {
    selectedCategory : PropTypes.string,
    setSelectedCategory: PropTypes.func,
}


export default Sidebar
