/* eslint-disable no-unused-vars */
import {
  Card,
  CardContent,
  CardActionArea,
  Box,
  Typography,
} from "@mui/material";

const cardStyles = {
  width: 300,
  mb: 2,
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
};

const actionAreaStyles = (isActive) => ({
  height: "100%",
  backgroundColor: isActive ? "#01579b" : "inherit",
  "&:hover": {
    backgroundColor: isActive ? "action.selectedHover" : "action.hover",
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
  <Card sx={cardStyles}>
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
