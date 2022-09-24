import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { PureComponent } from 'react';
import { connect } from "react-redux";
import { updateInventory } from '../store/actions';
import { getStore, getItems, getRootState } from '../store/selectors';
import store from '../store/store';
import './App.css';
import { RootState, ItemTypes, Stats } from '../store/constants'
const _ = require('lodash');

let rootState: RootState;
let items: ItemTypes;
let stats: Stats;

const mapStateToProps = (state: any) => {
    items = getItems(state);
    stats = getRootState(state);
    rootState = getRootState(state);
    console.log(items)
    return {
        rootState: rootState,
        stats: stats,
        items: items
    };
}

const mapDispatchToProps = { updateInventory };

class Inventory extends PureComponent {
    constructor(props: any) {
        super(props);
    }

    state: RootState = { rootState, stats, items }

    _equipItem(pickedItem: any) {
        const { items } = this.state
        items.forEach((e: any, sakuin: number) => {
            if (e === pickedItem) {
                e.inUse = !e.inUse
            }
        })

        store.dispatch(updateInventory({ name: 'Sharp Sword', slot: 'main hand', damage: 10, armor: 0, inUse: false }))
    }

    render() {
        const { items } = this.state

        return (
            <>
                {items.map((el: any, sakuin: number) => {
                    let bgcolor = el.inUse ? 'red' : 'lightblue';

                    return (
                        <Box key={sakuin} sx={{
                            display: 'inline-block',
                            mx: '2px',
                            transform: 'scale(0.8)'
                        }}>
                            <CardActionArea>
                                <Card sx={{ backgroundColor: bgcolor, border: '1px solid black', borderRadius: '5px' }} onClick={() => this._equipItem(el)}>
                                    <CardContent>
                                        <Typography>Name</Typography>
                                        <Typography>{el.name}</Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography>Slot</Typography>
                                        <Typography>{el.slot}</Typography>
                                    </CardContent>
                                    <CardContent >
                                        <Typography>Damage</Typography>
                                        <Typography>{el.damage}</Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Typography>Armor</Typography>
                                        <Typography>{el.armor}</Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Box>
                    )
                })}
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
