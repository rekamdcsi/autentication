import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const email = localStorage.getItem('email');
  return (
    <Card className={classes.home}>
      <h1>Welcome back {email}!</h1>
    </Card>
  );
};

export default Home;
