import React from 'react';
import classes from './CoinCard.module.scss';

const CoinCard = () => {
  return (
    <div className={classes.CoinCard}>
      <div className={classes.Row}>
        <img className={classes.Image} src="https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png" alt="icon" />
        <div><b>BTC</b> | <span>Bitcoin</span></div>
        <span className={classes.Price}>8484$</span>
      </div>
      <div className={classes.Row}>
        <div>
          <b>24h: </b>
          <span className={classes.red}>-1.15%</span>
        </div>
        <div>
          <b>7d: </b>
          <span className={classes.green}>5.65%</span>
        </div>
      </div>
    </div>
  )
}

export default CoinCard;
