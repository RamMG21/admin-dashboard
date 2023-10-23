/*Here are the setups for the colors and the types of website */
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

//color design tokens
export const tokens = (mode) => ({
    ...createContext(mode === 'dark'
    ?{

grey: {
    100: "#f6f6f6e0",
    200: "#e9e9e9c2",
    300: "#d5d5d5a3",
    400: "#b3b3b385",
    500: "#66666666",
    600: "#33333385",
    700: "#1c1c1ca3",
    800: "#0f0f0fc2",
    900: "#060606e0"
},

primary: {
    100: "#d0d1d5",
    200: "#a1a4ab",
    300: "#727681",
    400: "#434957",
    500: "#141b2d",
    600: "#101624",
    700: "#0c101b",
    800: "#080b12",
    900: "#040509"
},
greenAccent: {
    100: "#dbf5ee",
    200: "#b7ebde",
    300: "#94e2cd",
    400: "#70d8bd",
    500: "#4cceac",
    600: "#3da58a",
    700: "#2e7c67",
    800: "#1e5245",
    900: "#0f2922"
},
redAccent: {
    100: "#f8dcdb",
    200: "#f1b9b7",
    300: "#e99592",
    400: "#e2726e",
    500: "#db4f4a",
    600: "#af3f3b",
    700: "#832f2c",
    800: "#58201e",
    900: "#2c100f"
},
blueAccent: {
    100: "#e1e2fe",
    200: "#c3c6fd",
    300: "#a4a9fc",
    400: "#868dfb",
    500: "#6870fa",
    600: "#535ac8",
    700: "#3e4396",
    800: "#2a2d64",
    900: "#151632"
},
} : {grey: {
    100: "#060606e0",
    200: "#0f0f0fc2",
    300: "#1c1c1ca3",
    400: "#33333385",
    500: "#66666666",
    600: "#b3b3b385",
    700: "#d5d5d5a3",
    800: "#e9e9e9c2",
    900: "#f6f6f6e0",
},

primary: {
    100: "#040509",
    200: "#080b12",
    300: "#0c101b",
    400: "#101624",
    500: "#141b2d",
    600: "#434957",
    700: "#727681",
    800: "#a1a4ab",
    900: "#d0d1d5",
},
greenAccent: {
    100: "#0f2922",
    200: "#1e5245",
    300: "#2e7c67",
    400: "#3da58a",
    500: "#4cceac",
    600: "#70d8bd",
    700: "#94e2cd",
    800: "#b7ebde",
    900: "#dbf5ee",
},
redAccent: {
    100: "#2c100f",
    200: "#58201e",
    300: "#832f2c",
    400: "#af3f3b",
    500: "#db4f4a",
    600: "#e2726e",
    700: "#e99592",
    800: "#f1b9b7",
    900: "#f8dcdb",
},
blueAccent: {
    100: "#151632",
    200: "#2a2d64",
    300: "#3e4396",
    400: "#535ac8",
    500: "#6870fa",
    600: "#868dfb",
    700: "#a4a9fc",
    800: "#c3c6fd",
    900: "#e1e2fe",
},

}),
    
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mopde: mode,
            ...colors(mode === 'dark'
            ?{
                primary: {
                    main: colors.primary[500],
                },

                secondary: {
                    main: colors.greenAccent[500],
                },

                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },

                backgraund: {
                    cdefault : colors.primary[500]
                }
            

            } : {

                primary: {
                    main: colors.primary[100]
                },

                secondary: {
                    main: colors.greenAccent[500],
                },

                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },

                backgraund: {
                    cdefault : "#fcfcfc",
                },

            }),
        },

        typography: {
            fontFamily: ["Source seans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source seans Pro", "sans-serif"].join(","),
                fontSize: 40,
            }
        }
    };

};
