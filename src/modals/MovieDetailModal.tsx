import { CloseRounded } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

function MovieDetailModal() {

    const router = useRouter()

    const buttons =
        [
            {
                children: "Kaydet",
                variant: "contained",
                color: "secondary",
                type: "submit",
            },
        ]


    return (

        <Dialog maxWidth={"md"} fullWidth open >
            <DialogTitle>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: ".5rem",
                    }}>
                    <Typography variant="overline" fontSize={15} lineHeight="unset">
                        detay
                    </Typography>
                    <IconButton onClick={() => { router.replace({ query: {} }) }}>
                        <CloseRounded />
                    </IconButton>
                </Box>
            </DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2 }}>

                <div>asd</div>

            </DialogContent>
            {buttons && buttons.length > 0 && (
                <>
                    <Divider />
                    <DialogActions sx={{ p: 2 }}>
                        {buttons.map((v, index) => (
                            <Button key={index} >
                                <div>asd</div>
                            </Button>
                        ))}
                    </DialogActions>
                </>
            )}
        </Dialog>

        /*  <CustomModal
             title={t("Kullanıcı Oluştur")}
             open={open}
             onClose={() => {
                 onClose();
                 formik.resetForm();
                 setConfirmPassword("");
             }}
             formProps={{ onSubmit: formik.handleSubmit }}
             maxWidth={"sm"}
             buttons={[
                 {
                     children: t("Kaydet"),
                     variant: "contained",
                     color: "secondary",
                     type: "submit",
                     loading: postRequest.isLoading,
                 },
             ]}>
          
         </CustomModal> */
    );
}

export default MovieDetailModal