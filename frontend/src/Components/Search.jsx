import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { usePartners } from '../hooks/UsePartners';

const Search = () => {
    const [range, setRange] = useState(0);
    const [long, setLong] = useState(0);
    const [lat, setLat] = useState(0);
    const { search } = usePartners();

    const handleSubmit = () => {
        try {
            if (isValidInteger(range) && isValidInteger(long) && isValidInteger(lat)) {
                search({ range, long, lat });
            } else {
                throw new Error("Invalid data");
            }

        } catch (error) {
            console.log(error);
        }

    };

    const handleClear = () => {
        setRange("");
        setLat("");
        setLong("");
        search(null);
    };

    function isValidInteger(str) {
        if (typeof str !== 'string') {
            return false;
        }

        return !isNaN(str) && !isNaN(parseFloat(str))
    }

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
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
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
                        value={long}
                        onChange={(e) => setLong(e.target.value)}
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
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={3} style={{ margin: "0px !important", padding: "0px !important" }}
                    alignContent="flex-end">
                    <Button
                        variant="outlined"
                        onClick={handleSubmit}
                        sx={{ mt: 3, ml: 0 }}
                        sm={{ ml: 0, mt: 0 }}
                        md={{ ml: 0, mt: 4, mb: 10 }}
                    >
                        Search
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClear}
                        sx={{ mt: 3, ml: 0 }}
                        sm={{ ml: 0, mt: 0 }}
                        md={{ ml: 0, mt: 4, mb: 10 }}
                    >
                        Clear
                    </Button>
                </Grid>

            </Grid>
        </Box >
    )
}

export default Search