import { Box,CircularProgress, Stack } from "@mui/material"

const Loader = () => {
  return (
    <Box minHeight='95vh'>
      <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      height='80vh'
      >
        <CircularProgress />
      </Stack>
    </Box >
  )
}

export default Loader
