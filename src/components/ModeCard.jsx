/* eslint-disable no-unused-vars */
import {
  Card,
  CardContent,
  CardActionArea,
  Box,
  Typography,
} from "@mui/material";

const actionAreaStyles = (isActive) => ({
  height: "100%",
  backgroundColor: isActive ? "#01579b" : "inherit",
  "&:hover": {
    backgroundColor: isActive ? "action.selectedHover" : "action.hover",
  },
  paddingY: {
    xs: 1,
    sm: 2,
  },
  paddingX: {
    xs: 2,
    sm: 3,
  },
});

const ModeCard = ({
  title,
  color,
  subtitleColor,
  Icon,
  isActive,
  time,
  onClick,
}) => (
  <Card
    sx={{
      width: {
        xs: "100%",
        sm: 250,
        md: 300,
      },
      mb: {
        xs: 1,
        sm: 2,
      },
      display: "flex",
      alignItems: "center",
      borderRadius: "16px",
    }}
  >
    <CardActionArea onClick={onClick} sx={actionAreaStyles(isActive)}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icon sx={{ color, mr: 1 }} />
          <Typography variant="h5" sx={{ color, fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: subtitleColor }}>
          {time} Minutes
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ModeCard;
