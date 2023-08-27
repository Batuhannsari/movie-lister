import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomThemeProvider = ({ children }) => {
    const theme = createTheme(
        {
            palette: {
                primary: {
                    main: "#4D4D4D",
                    contrastText: "#FFFFFF",
                },
                secondary: {
                    main: "#D05515",
                    contrastText: "#FFFFFF",
                },
                text: {
                    primary: "#4D4D4D",
                },
                background: {
                    default: "#F5F5F5",
                },
            },
            components: {
                MuiButton: {
                    defaultProps: {
                        disableElevation: true,
                    },
                    styleOverrides: {
                        root: {
                            height: "40px"
                        }
                    }
                },
                MuiInputBase: {
                    styleOverrides: {
                        root: {
                            height: "40px",
                            backgroundColor: "white",
                        },
                        inputAdornedEnd: {
                            marginTop: -6
                        }
                    }
                },
                MuiAutocomplete: {
                    defaultProps: {
                        color: "secondary"
                    },
                    styleOverrides: {
                        root: {
                            height: "40px",
                        }
                    },
                },
                MuiTextField: {
                    defaultProps: {
                        color: "secondary"
                    },
                    styleOverrides: {
                        root: {
                            height: "40px",
                        }
                    }
                },
            },
            shape: {
                borderRadius: 8,
            },
            typography: {
                fontFamily: "inherit",
                htmlFontSize: 18,
                button: {
                    textTransform: "none",
                },
            },
        },
    );

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>;
};

export default CustomThemeProvider;
