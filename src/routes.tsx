import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'
import { Workouts } from './pages/Workouts'
import { Profile } from './pages/Profile'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { CreateProgram } from './pages/CreateProgram'
import { EditProgram } from './pages/EditProgram'
import { WorkoutInfo } from './pages/WorkoutInfo'

export const appRoutes = (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/programs" exact>
          <Programs />
        </Route>
        <Route path="/workouts">
          <Workouts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/create">
          <CreateProgram />
        </Route>
        <Route path="/edit/:id">
          <EditProgram />
        </Route>
        <Route path="/workout/:id">
          <WorkoutInfo />
        </Route>
        <Redirect to="/programs" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Redirect to="/login" />
    </Switch>
  )
}
