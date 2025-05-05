import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Card1() {
  const [mcnt, setMcnt] = useState(0);
  const [fcnt, setFcnt] = useState(0);
  const [qcnt, setQcnt] = useState(0);
  
 function cnt(){
    axios.get("http://localhost:3000/cnt")
      .then(response => {
        console.log("Response from /cnt:", response.data);
        setMcnt(response.data.menu_count);
        setFcnt(response.data.food_cat_count);
        setQcnt(response.data.qty_mast_count);
      })
      .catch(error => console.error("Error fetching counts:", error));
 

}
useEffect(()=>{
  cnt();
},[]);
const cards = [
  { id: 1, title: 'Menu', description: mcnt, bgColor: '#1976d2' },         // Blue
  { id: 2, title: 'Food Category', description: fcnt, bgColor: '#1976d2' }, // Green
  { id: 3, title: 'Size Mast', description: qcnt, bgColor: '#1976d2' },     // Red
];

const [selectedCard, setSelectedCard]=useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%),1fr))',
        gap: 2,
       
      }}
    >
      {cards.map((card, index) => (
       <Card key={card.id} sx={{ backgroundColor: card.bgColor, color: '#fff' }}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#fff' }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}


