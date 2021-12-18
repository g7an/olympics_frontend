import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PoolIcon from '@mui/icons-material/Pool';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

export const CompeteInfoTable = (props) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ThumbUpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Overall Winning Rate (All Medals)" secondary={`${props.cellData['win_rate']}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DirectionsBikeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Male Winning Rate (All Medals)" secondary={`${props.cellData['male_rate']}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Female Winning Rate (All Medals)" secondary={`${props.cellData['female_rate']}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmojiEventsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Gold Medal Winning Rate" secondary={`${props.cellData['gold_rate']}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MilitaryTechIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Silver Medal Winning Rate" secondary={`${props.cellData['silver_rate']}`} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FilterVintageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bronze Medal Winning Rate" secondary={`${props.cellData['bronze_rate']}`} />
    </ListItem>
    </List>
  );
}
