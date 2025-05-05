import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
