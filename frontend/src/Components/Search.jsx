import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const Search = () => {

    const handleNext = () => {
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Search Nearst Partners To Location
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="range"
                        name="range"
                        label="Range In Km"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="longitude"
                        name="longitude"
                        label="Longitude"
                        fullWidth
                        autoComplete="coordinates"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="latitude"
                        name="latitude"
                        label="Latitude"
                        fullWidth
                        autoComplete="coordinates"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3} style={{ margin: "0px !important", padding: "0px !important" }}
                    alignContent="flex-end">
                    <Button
                        variant="outlined"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 0 }}
                        sm={{ ml: 0, mt: 0 }}
                        md={{ ml: 0, mt: 4, mb: 10 }}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Search