import React from "react";
import {
  ExitToAppOutlined,
  SupervisorAccountOutlined,
  FlutterDashOutlined,
} from "@mui/icons-material";
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  useTheme,
  Typography,
} from "@mui/material";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: 0,
        borderBottom: `1px solid ${theme.palette.bordercolor.default}`,
      }}
    >
      <Toolbar
        // disableGutters
        // variant="dense"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: theme.palette.background.white,
          minHeight: "55px !important",
        }}
      >
        {/* Left Side of Topbar */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <IconButton disabled>
            <FlutterDashOutlined
              sx={{
                fontSize: "30px",
                color: theme.palette.themecolor.default,
              }}
            />
          </IconButton>
          <Typography
            fontSize="1.5rem"
            alignItems="center"
            sx={{ color: theme.palette.fontcustomcolor.default }}
          >
            Smart Home
          </Typography>
        </Box>

        {/* Right Side of Topbar */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" gap="1rem" alignItems="center">
            <IconButton disabled>
              <SupervisorAccountOutlined
                sx={{
                  color: theme.palette.themecolor.default,
                }}
              />
            </IconButton>
            <Typography
              fontSize="1rem"
              alignItems="center"
              sx={{ color: theme.palette.fontcustomcolor.default, ml: "-1rem" }}
            >
              Admin
            </Typography>
            <Typography
              fontSize="1rem"
              alignItems="center"
              sx={{
                color: theme.palette.fontcustomcolor.default,
              }}
            >
              |
            </Typography>
            <IconButton>
              <ExitToAppOutlined
                sx={{
                  color: theme.palette.themecolor.default,
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
