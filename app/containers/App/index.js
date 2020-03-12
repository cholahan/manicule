
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import HomePage from '../HomePage/Loadable'
import ReaderPage from '../ReaderPage/Loadable'
import AboutPage from '../AboutPage/Loadable'
import MoralSentiments from '../MoralSentiments/Loadable'
import ToC from '../ToC/Loadable'
import Clarissa from '../Clarissa/Loadable'
import Pamela from '../Pamela/Loadable'
import Grandison from '../grandison/Loadable'
import Tours from '../Tours/Loadable'

import NotFoundPage from '../NotFoundPage/Loadable'

const DEFAULT_EDITION = 'penn'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <HomePage edition={DEFAULT_EDITION} />} />
      <Route exact path="/reader" render={() => <Redirect to={`/reader/${DEFAULT_EDITION}/1`} />} />

      <Route
        exact
        path="/reader/:edition/:page"
        component={ReaderPage}
      />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/sentiments" component={MoralSentiments} />
      <Route exact path="/toc" component={ToC} />
      <Route exact path="/clarissa" component={Clarissa} />
      <Route exact path="/pamela" component={Pamela} />
      <Route exact path="/grandison" component={Grandison} />
      <Route exact path="/tours" component={Tours} />

      <Route component={NotFoundPage} />

    </Switch>
  )
}
