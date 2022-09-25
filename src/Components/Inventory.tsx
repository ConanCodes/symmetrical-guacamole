import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { updateItems } from "../store/actions";
import "./App.css";
import { RootState } from "../store/constants";

const _ = require("lodash");

const mapStateToProps = (state: any) => {
  return {
    playerState: state.reducer.playerState,
    rootFunctions: state.reducer.rootFunctions,
  };
};

const mapDispatchToProps = { updateItems };

class Inventory extends PureComponent<RootState> {
  constructor(props: RootState) {
    super(props);
  }

  render() {
    const { items, inUseItems } = this.props.playerState;
    return (
      <Grid container justifyContent={"center"} >
        {items.map((item: any, sakuin: number) => {
          return (
            <Box
              key={sakuin}
              sx={{
                display: "inline-block",
                // mx: "2px",
                transform: "scale(.9)",
                justifyItems: "center",
              }}
            >
              <Paper
                className='stat-container'
                // elevation={2}
                sx={{
                  backgroundColor: _.includes(inUseItems, item) ? "red" : "lightgrey",
                  // textAlign: 'center',
                  // padding: '10px',
                }}
                onClick={() => this.props.updateItems(item)}
              >
                <Typography variant="overline" fontSize={'large'} fontWeight={'800'} gutterBottom>Name</Typography>
                <Typography>{item.name}</Typography>
                <Typography variant="overline" fontSize={'large'} fontWeight={'800'} gutterBottom>Slot</Typography>
                <Typography>{item.slot}</Typography>
                <Typography variant="overline" fontSize={'large'} fontWeight={'800'} gutterBottom>Damage</Typography>
                <Typography>{item.damage}</Typography>
                <Typography variant="overline" fontSize={'large'} fontWeight={'800'} gutterBottom>Armor</Typography>
                <Typography>{item.armor}</Typography>
              </Paper>
            </Box>
          );
        })}
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
