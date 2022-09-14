import { PureComponent } from 'react';
import './App.css';

type MonsterFighterState = {
  bonusLifeEl: number;
  ATTACK_VALUE: number;
  STRONG_ATTACK_VALUE: number;
  MONSTER_ATTACK_VALUE: number;
  HEAL_VALUE: number;
  chosenMaxLife: number;
  currentMonsterHealth: number;
  currentPlayerHealth: number;
  hasBonusLife: boolean;
  log: string[];
  showLog: boolean;
}

class MonsterFighter extends PureComponent<MonsterFighter> {

  state: MonsterFighterState = {

    ATTACK_VALUE: 10,
    STRONG_ATTACK_VALUE: 17,
    MONSTER_ATTACK_VALUE: 14,
    HEAL_VALUE: 15,
    bonusLifeEl: 0,
    chosenMaxLife: 100,
    currentMonsterHealth: 100,
    currentPlayerHealth: 100,
    hasBonusLife: false,
    log: [],
    showLog: true,

  }

  reset() {
    this.setState({
      currentMonsterHealth: this.state.chosenMaxLife,
      currentPlayerHealth: this.state.chosenMaxLife,
    })
  }

  endRound(value: number, action: string) {
    const initialPlayerHealth = this.state.currentPlayerHealth;
    const crit = Math.floor(Math.random() * 100) <= 20 ? 10 : 0;
    const damageToPlayer =
      action === 'heal' ? (Math.floor(Math.random() * this.state.MONSTER_ATTACK_VALUE)) - value : Math.floor(Math.random() * this.state.MONSTER_ATTACK_VALUE);

    this.setState({
      currentMonsterHealth: this.state.currentMonsterHealth - (value + crit),
      currentPlayerHealth: this.state.currentPlayerHealth - damageToPlayer,
    })

    if (this.state.currentPlayerHealth <= 0 && this.state.hasBonusLife) {
      this.setState({
        hasBonusLife: false,
        currentPlayerHealth: initialPlayerHealth
      })
      alert('You would be dead but the bonus life saved you!');
    }

    if (this.state.currentMonsterHealth <= 0 && this.state.currentPlayerHealth > 0) {
      alert('You won!');
      this.reset();
    } else if (this.state.currentPlayerHealth <= 0 && this.state.currentMonsterHealth > 0) {
      alert('You lost!');
      this.reset();
    } else if (this.state.currentPlayerHealth <= 0 && this.state.currentMonsterHealth <= 0) {
      alert('You have a draw!');
      this.reset();
    }
  }

  attackMonster(mode: string) {
    if (mode === 'ATTACK')
      this.endRound(Math.floor(Math.random() * this.state.ATTACK_VALUE), 'attack');
    else
      this.endRound(Math.floor(Math.random() * this.state.STRONG_ATTACK_VALUE), 'attack');
  }


  healPlayerHandler() {
    let healValue;
    if (this.state.currentPlayerHealth >= this.state.chosenMaxLife - this.state.HEAL_VALUE) {
      alert("You can't heal to more than your max initial health.");
      healValue = this.state.chosenMaxLife - this.state.currentPlayerHealth;
    } else
      healValue = this.state.HEAL_VALUE;

    this.endRound(healValue, 'heal');
  }

  render() {

    return (
      <div>
        <div>Crit: 20%</div>
        <div id="health-levels">
          <h2>{`MONSTER HEALTH ${this.state.currentMonsterHealth} / ${this.state.chosenMaxLife}`}</h2>
          <h2>{`PLAYER HEALTH ${this.state.currentPlayerHealth} / ${this.state.chosenMaxLife}`}</h2>
        </div>
        <div id="controls">
          <button id="attack-btn" onClick={() => this.attackMonster('ATTACK')}>ATTACK</button>
          <button id="strong-attack-btn" onClick={() => this.attackMonster('STONG ATTACK')}>STRONG ATTACK</button>
          <button id="heal-btn" onClick={() => this.healPlayerHandler()}>HEAL</button>
          <button id="log-btn">SHOW LOG</button>
        </div>
      </div>
    );
  }
}

export default MonsterFighter;