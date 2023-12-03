import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(4),
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          <Link href="/about">About</Link> | <Link href="/privacy">Privacy</Link> |{' '}
          <Link href="/terms">Terms and Conditions</Link> |{' '}
          <Link href="/contact">Contact</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" mt={2}>
          © {new Date().getFullYear()} Your Expense Tracker. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
