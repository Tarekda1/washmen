import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Partner = ({ partner: { id, organization, customerLocations, willWorkRemotely, website, services } }) => {
    return (
        <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {id}
            </TableCell>
            <TableCell align="right">{organization}</TableCell>
            <TableCell align="right">{customerLocations}</TableCell>
            <TableCell align="right">{willWorkRemotely ? "Yes" : "No"}</TableCell>
            <TableCell align="right"><a href={website} target="blank">{website}</a></TableCell>
            <TableCell align="right">{services.slice(0, 100) + "..."}</TableCell>
        </TableRow>
    )
}

export default Partner