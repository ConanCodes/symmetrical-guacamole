import { Card, Container, Grid, Paper, Typography } from "@mui/material";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { RootState } from "../store/constants";
import "./App.css";
import Inventory from "./Inventory";
import {
  damagePlayer,
  damageMonster,
  resetPlayerLife,
  resetGame,
} from "../store/actions";

const _ = require("lodash");

const mapStateToProps = (state: any) => {
  return state.reducer;
};

const mapDispatchToProps = {
  damagePlayer,
  damageMonster,
  resetPlayerLife,
  resetGame,
};

class MonsterFighter extends PureComponent<RootState> {
  constructor(props: RootState) {
    super(props);
  }

  endRound(value: number, action: string) {
    const { currentMonsterHealth } = this.props.monsterState;
    const { currentPlayerHealth } = this.props.playerState;
    const { armor } = this.props.playerState.stats;
    const { baseArmor, baseLife } = this.props.playerState.baseStats;

    const crit = Math.floor(Math.random() * 100) <= 20 ? 10 : 0;

    // Monster Damage Done - Heal Done (Heal is still random so the base value is high)
    const damageToPlayer =
      action === "heal"
        ? Math.floor(Math.random() * this.props.monsterState.damage) - value
        : Math.floor(Math.random() * this.props.monsterState.damage);

    // Remove damage blocked by armor
    let dmg =
      damageToPlayer - (armor + baseArmor) > baseLife ? 0 : damageToPlayer - (armor + baseArmor);
    this.props.damagePlayer(dmg);
    if (action === "attack") this.props.damageMonster(value + crit);

    if (
      currentPlayerHealth <= 0 &&
      this.props.playerState.stats.bonusLife > 0
    ) {
      this.props.resetPlayerLife();
    }

    if (currentPlayerHealth > 0 && currentMonsterHealth <= 0) {
      alert("You won!");
      this.props.resetGame();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
      alert("You lost!");
      this.props.resetGame();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
      alert("You have a draw!");
      this.props.resetGame();
    }
  }

  attackMonster(mode: string) {
    let playerDmg =
      this.props.playerState.stats.damage +
      this.props.playerState.baseStats.baseDamage;
    if (mode === "ATTACK") this.endRound(playerDmg, "attack");
    else this.endRound(playerDmg + 8, "attack");
  }

  healPlayerHandler() {
    const { currentPlayerHealth } = this.props.playerState;
    const { baseLife, baseHealAmount } = this.props.playerState.baseStats;

    let healValue;
    if (currentPlayerHealth >= baseLife - baseHealAmount) {
      healValue = baseLife - currentPlayerHealth;
    } else healValue = baseHealAmount;

    this.endRound(healValue, "heal");
  }

  render() {
    const { baseLife, baseDamage, baseArmor } =
      this.props.playerState.baseStats;
    const { currentPlayerHealth } = this.props.playerState;
    const { armor, bonusLife, damage, healAmount, life } =
      this.props.playerState.stats;
    const { currentMonsterHealth, mLife } = this.props.monsterState;

    return (
      <Container fixed>
        {/* @ts-expect-error: I need to figure out how to not require the state but if i use ? it makes errors everywhere */}
        <Inventory />
        <Grid container justifyContent={"center"}>
          <Grid item xs={1} className='stat-container'>
            <Typography paragraph >{`Health: ${baseLife}`}</Typography>
            <Typography paragraph>{`Damage: ${damage + baseDamage}`}</Typography>
            <Typography paragraph>{`Armor: ${baseArmor + armor}`}</Typography>
          </Grid>
          <Grid item xs={10} >
            <div id="health-levels">
              <h2>{`MONSTER HEALTH ${currentMonsterHealth} / ${mLife}`}</h2>
              <h2>{`PLAYER HEALTH ${currentPlayerHealth} / ${baseLife}`}</h2>
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
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterFighter);
