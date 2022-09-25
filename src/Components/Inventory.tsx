import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
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
      <Grid container justifyContent={"center"}>
        {items.map((item: any, sakuin: number) => {
          return (
            <Box
              key={sakuin}
              sx={{
                display: "inline-block",
                mx: "2px",
                transform: "scale(0.8)",
                justifyItems: "center",
              }}
            >
              <CardActionArea>
                <Card
                  sx={{
                    backgroundColor: _.includes(inUseItems, item)
                      ? "red"
                      : "lightblue",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                  onClick={() => this.props.updateItems(item)}
                >
                  <CardContent>
                    <Typography>Name</Typography>
                    <Typography>{item.name}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography>Slot</Typography>
                    <Typography>{item.slot}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography>Damage</Typography>
                    <Typography>{item.damage}</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography>Armor</Typography>
                    <Typography>{item.armor}</Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Box>
          );
        })}
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
