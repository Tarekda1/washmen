import React, { useEffect, useState } from "react";
import { usePartners } from "../hooks/UsePartners";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./partners.css";
import Partner from "./Partner";

const Partners = () => {
  const { partners, isLoading, isError } = usePartners();
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Error while loading data</div>;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Organization</TableCell>
              <TableCell align="right">Customer Locations</TableCell>
              <TableCell width="10%" align="right">Allow Remotely</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right">Services</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {partners.map((row) => (
              <Partner partner={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Partners;
