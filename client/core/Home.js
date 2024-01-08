import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import expense_tracker from '../assets/images/expense_tracker.jpg'
import { Link } from 'react-router-dom'
import auth from '../auth/auth-helper'
import ExpenseOverview from './../expense/ExpenseOverview'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 440
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a': {
      color: '#4f83cc'
    }
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(4),
  },
  featureItem: {
    textAlign: 'center',
    flex: 1,
    padding: theme.spacing(2),
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <>
      {auth.isAuthenticated() &&
        <ExpenseOverview />
      }
      {!auth.isAuthenticated() && typeof window !== "undefined" &&
        (
          <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
              Welcome to the Expense Tracker
            </Typography>
            <CardMedia className={classes.media} image={expense_tracker} title="Expense Tracker Image" />

            <CardContent>
              <Typography variant="body1" component="p">
                Take control of your finances with our MERN Expense Tracker. Sign up or sign in to get started.
              </Typography>

              {/* Features Section */}
              <div className={classes.features}>
                <div className={classes.featureItem}>
                  <Typography variant="h6">Easy Tracking</Typography>
                  <Typography variant="body2">Effortlessly track your expenses.</Typography>
                </div>
                <div className={classes.featureItem}>
                  <Typography variant="h6">Categories</Typography>
                  <Typography variant="body2">Categorize your expenses for better insights.</Typography>
                </div>
                <div className={classes.featureItem}>
                  <Typography variant="h6">Reports</Typography>
                  <Typography variant="body2">Generate reports to analyze your spending.</Typography>
                </div>
              </div>

              {/* Call-to-Action */}
              <Typography variant="body1" component="p" className={classes.features}>
                Ready to start? <Link to='/signup'>Sign up</Link> now!
              </Typography>
            </CardContent>
          </Card>
        )
      }
    </>
  )
}
