import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const cards = [
  {
    id: 1,
    title: "Focus",
    description: "....Minutes.",
    icon: <PendingActionsIcon color="secondary" />,
  },
  {
    id: 2,
    title: "Short Breaks",
    description: "....Minutes.",
    icon: <CoffeeMakerIcon />,
  },
  {
    id: 3,
    title: "Longs Breaks",
    description: "....Minutes",
    icon: <LocalDiningIcon />,
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
            backgroundColor: "",
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent>
              <Typography variant="h5">
                {card.icon} {card.title}
              </Typography>
              <Typography variant="body1">{card.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Cardlist;
