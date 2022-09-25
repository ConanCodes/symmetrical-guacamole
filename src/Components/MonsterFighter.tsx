import { Grid } from "@mui/material";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { MonsterFighterState, RootState } from "../store/constants";
import { getStore } from "../store/selectors";
import "./App.css";
import Inventory from "./Inventory";

const _ = require("lodash");

const mapStateToProps = (state: any) => {
  return {
    rootState: state.reducer.rootState,
    stats: state.reducer.stats,
    items: state.reducer.items,
    inUseItems: state.reducer.inUseItems,
  };
};

class MonsterFighter extends PureComponent<RootState, MonsterFighterState> {
  constructor(props: any) {
    super(props);
  }
  state: MonsterFighterState = {
    ATTACK_VALUE: this.props.stats.damage,
    STRONG_ATTACK_VALUE: this.props.stats.damage + 5,
    MONSTER_ATTACK_VALUE: 14,
    HEAL_VALUE: 15,
    bonusLifeEl: 0,
    chosenMaxLife: 100,
    currentMonsterHealth: 100,
    currentPlayerHealth: 100,
    hasBonusLife: false,
    log: [],
    showLog: true,
    itemsEquipped: [],
  };

  reset() {
    this.setState({
      currentMonsterHealth: this.state.chosenMaxLife,
      currentPlayerHealth: this.state.chosenMaxLife,
    });
  }

  endRound(value: number, action: string) {
    const initialPlayerHealth = this.state.currentPlayerHealth;
    const crit = Math.floor(Math.random() * 100) <= 20 ? 10 : 0;
    const damageToPlayer =
      action === "heal"
        ? Math.floor(Math.random() * this.state.MONSTER_ATTACK_VALUE) - value
        : Math.floor(Math.random() * this.state.MONSTER_ATTACK_VALUE);

    this.setState({
      currentMonsterHealth: this.state.currentMonsterHealth - (value + crit),
      currentPlayerHealth: this.state.currentPlayerHealth - damageToPlayer,
    });

    if (this.state.currentPlayerHealth <= 0 && this.state.hasBonusLife) {
      this.setState({
        hasBonusLife: false,
        currentPlayerHealth: initialPlayerHealth,
      });
      alert("You would be dead but the bonus life saved you!");
    }

    if (
      this.state.currentMonsterHealth <= 0 &&
      this.state.currentPlayerHealth > 0
    ) {
      alert("You won!");
      this.reset();
    } else if (
      this.state.currentPlayerHealth <= 0 &&
      this.state.currentMonsterHealth > 0
    ) {
      alert("You lost!");
      this.reset();
    } else if (
      this.state.currentPlayerHealth <= 0 &&
      this.state.currentMonsterHealth <= 0
    ) {
      alert("You have a draw!");
      this.reset();
    }
  }

  attackMonster(mode: string) {
    console.log("damage", this.state.ATTACK_VALUE);
    if (mode === "ATTACK")
      this.endRound(
        Math.floor(Math.random() * this.state.ATTACK_VALUE),
        "attack"
      );
    else
      this.endRound(
        Math.floor(Math.random() * this.state.STRONG_ATTACK_VALUE),
        "attack"
      );
  }

  healPlayerHandler() {
    let healValue;
    if (
      this.state.currentPlayerHealth >=
      this.state.chosenMaxLife - this.state.HEAL_VALUE
    ) {
      alert("You can't heal to more than your max initial health.");
      healValue = this.state.chosenMaxLife - this.state.currentPlayerHealth;
    } else healValue = this.state.HEAL_VALUE;

    this.endRound(healValue, "heal");
  }

  _equipItem(item: string) {
    let array = _.isNil(this.state.itemsEquipped)
      ? []
      : this.state.itemsEquipped;
    array?.push(item);
    this.setState({ itemsEquipped: array });
  }

  render() {
    console.log(this.props);
    return (
      <Grid container justifyContent={"space-around"}>
        <Grid item xs={3}>
          <Inventory />
        </Grid>
        {/* <Grid item xs={1}>
          <Card >
            <Typography>{`Health: ${this.state.chosenMaxLife}`}</Typography>
            <Typography>{`Health: ${this.state.chosenMaxLife}`}</Typography>
          </Card>
        </Grid> */}
        <Grid item xs={9}>
          <div id="health-levels">
            <h2>{`MONSTER HEALTH ${this.state.currentMonsterHealth} / ${this.state.chosenMaxLife}`}</h2>
            <h2>{`PLAYER HEALTH ${this.state.currentPlayerHealth} / ${this.state.chosenMaxLife}`}</h2>
          </div>
          <div id="controls">
            <button onClick={() => this.attackMonster("ATTACK")}>ATTACK</button>
            <button onClick={() => this.attackMonster("STONG ATTACK")}>
              STRONG ATTACK
            </button>
            <button onClick={() => this.healPlayerHandler()}>HEAL</button>
            <button>SHOW LOG</button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(MonsterFighter);
