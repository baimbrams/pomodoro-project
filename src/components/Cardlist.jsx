import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { lightBlue } from "@mui/material/colors";

const cards = [
  {
    id: 1,
    title: (
      <Typography variant="h5" sx={{ color: "#FFACAC", fontWeight: "bold" }}>
        Focus
      </Typography>
    ),
    description: "....Minutes.",
    icon: <PendingActionsIcon sx={{ color: "#FFACAC", mr: 1 }} />,
  },
  {
    id: 2,
    title: (
      <Typography variant="h5" sx={{ color: "#B2BAFA", fontWeight: "bold" }}>
        Short Break
      </Typography>
    ),
    description: "....Minutes.",
    icon: <CoffeeMakerIcon sx={{ color: "#B2BAFA", mr: 1 }} />,
  },
  {
    id: 3,
    title: (
      <Typography variant="h5" sx={{ color: "#868EBD", fontWeight: "bold" }}>
        Long Break
      </Typography>
    ),
    description: "....Minutes",
    icon: <LocalDiningIcon sx={{ color: "#868EBD", mr: 1 }} />,
  },
];

function Cardlist() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          sx={{
            width: 300,
            mb: 2,
            display: "flex",
            alignItems: "center",
            borderRadius: "16px",
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: lightBlue[900],
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {card.icon} {card.title}
              </Box>
              <Typography variant="body1">{card.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Cardlist;
