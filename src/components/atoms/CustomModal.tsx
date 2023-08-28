import { CloseRounded } from "@mui/icons-material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  title: string;
  buttons?: LoadingButtonProps[];
  formProps?: React.FormHTMLAttributes<HTMLFormElement>;
} & DialogProps;

const CustomModal = (props: Props) => {
  const { title, buttons, formProps, onSubmit, maxWidth, ...rest } = props;
  return (
    <Dialog maxWidth={maxWidth || "md"} fullWidth {...rest}>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: ".5rem",
          }}>
          <Typography variant="overline" fontSize={15} lineHeight="unset">
            {title}
          </Typography>
          <IconButton onClick={props.onClose as any}>
            <CloseRounded />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider />
      <form {...formProps}>
        <DialogContent sx={{ p: 2 }}>{props.children}</DialogContent>
        {buttons && buttons.length > 0 && (
          <>
            <Divider />
            <DialogActions sx={{ p: 2 }}>
              {buttons.map((v, index) => (
                <LoadingButton key={index} {...v}>
                  {v.children}
                </LoadingButton>
              ))}
            </DialogActions>
          </>
        )}
      </form>
    </Dialog>
  );
};

export default CustomModal;
