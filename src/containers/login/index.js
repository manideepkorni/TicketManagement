/* eslint-disable import/no-unused-modules */
/*
 * Copyright 2022 Agnostiq Inc.
 * Note: This file is subject to a proprietary license agreement entered into between
 * you (or the person or organization that you represent) and Agnostiq Inc. Your rights to
 * access and use this file is subject to the terms and conditions of such agreement.
 * Please ensure you carefully review such agreements and, if you have any questions
 * please reach out to Agnostiq at: [support@agnostiq.com].
 */
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import mirosoft from '../../assets/microsoft.svg'
import '../../App.css';

function Login() {
    return (
        <>
            <Grid
                container
                sx={{
                    height: '100vh'
                }}
            >
                <Grid item xs={6} sx={{ backgroundColor: "#092a2a" }}>
                </Grid>
                <Grid item container xs={6} align="center" justifyContent="center"
                    alignItems="center" sx={{ backgroundColor: '#fdfde7' }} direction="column">
                    <Box sx={{ backgroundColor: "#ffffff", width: '50vh', height: '40vh', boxShadow: 2, borderRadius: '8px' }}>
                        <Typography mt={5}>Sign in to continue</Typography>
                        <Button
                            variant="outlined"
                            disableElevation
                            disableRipple
                            startIcon={<img src={mirosoft} alt="mirosoft" />}
                            sx={{
                                mt: 7, borderColor: 'black', textTransform: 'none',
                                color: 'black',
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent",
                                    borderColor: 'black'
                                }
                            }}>
                            Sign in with microsoft
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
