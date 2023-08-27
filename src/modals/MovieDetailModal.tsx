import { CloseRounded } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

function MovieDetailModal() {

    const router = useRouter()

    

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
            {/*  <DialogContent sx={{ p: 2 }}>{props.children}</DialogContent>
            {buttons && buttons.length > 0 && (
                <>
                    <Divider />
                    <DialogActions sx={{ p: 2 }}>
                        {buttons.map((v, index) => (
                            <LoadingButton key={index} {...v}>
                                <div>asd</div>
                            </LoadingButton>
                        ))}
                    </DialogActions>
                </>
            )} */}
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