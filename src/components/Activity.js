import React from 'react'
import Layoutcomponent from '../layout/layoutcomponent'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material'
import noResults from '../media/noresults.jpg'

function createData(source,destination,travelled) {
  return { source, destination, travelled};
}

const rows = [
  createData('IOCL GHY', 'DIGBOI',104),
  createData('NOONMATI', 'IOCL', 4),
  createData('DEMO', 'DEMO2', 35),
]; 

let activity=null;

export function Activity() {
  return (
    <>
        <Layoutcomponent>

        {
          activity ? <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300,marginTop:15 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{background:"#50C878", boxShadow:"2px solid black"}}>
                        <TableCell align="center" sx={{fontWeight:"bold"}}>
                            SOURCE
                        </TableCell>
                        <TableCell align="center" sx={{fontWeight:"bold"}}>
                            DESTINATION
                        </TableCell>
                        <TableCell align="center" sx={{fontWeight:"bold"}}>
                            DISTANCE
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.source}
                            sx={{ '&:last-child td, &:last-child th':
                                { border: 0 } }}
                        >
                            <TableCell align="center">
                                {row.source}
                            </TableCell>
                            <TableCell align="center">
                                {row.destination}
                            </TableCell>
                            <TableCell align="center">
                                {row.travelled}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
          </>
          : <>
            <div style={{display:"flex",justifyContent:"center",alignItems:"baseline",paddingTop:"100px"}}>
              <img src={noResults} style={{width:"350px",height:"auto",  boxShadow: "3px 2px 4px #2d292a"}}></img>
            </div>
          </>
        }
        </Layoutcomponent>
    </>
  )
}
export default Activity
 