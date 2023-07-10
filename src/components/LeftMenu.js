import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppConsumer } from '../store';
import { CLOSE } from '../store/actions';
import { Link as LinkRouter } from 'react-router-dom';

export default function LeftMenu({ openLeftMenu, openMenu }) {


  const [state, dispatch] = AppConsumer();
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    dispatch(CLOSE(false));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem >
          <LinkRouter to={"product"} replace={true}>

            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Product"} />

            </ListItemButton>
          </LinkRouter>
        </ListItem>
        <ListItem >
          <LinkRouter to={"user"} replace={true}>

            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"User"} />

            </ListItemButton>
          </LinkRouter>
        </ListItem>
      </List>
      <Divider />

    </Box>
  );

  return (
    <div>
      <React.Fragment >
        <Drawer
          anchor={"left"}
          open={state.toggleMenu}
          onClose={toggleDrawer('left', false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}