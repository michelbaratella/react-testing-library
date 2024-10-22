import { Typography, useTheme } from "@mui/material";

export default function MuiMode() {
  const theme = useTheme();
  return (
    <Typography component={"h1"}>{`${theme.palette.mode} mode`}</Typography>
  );
}
