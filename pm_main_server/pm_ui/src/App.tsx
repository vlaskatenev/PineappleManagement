import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import RenderPopUpContex from './components/PopUp/PopUpContex'
import History from './containers/History/History'
import InstallSoft from './containers/InstallSoft/InstallSoft'
import Layout from './hoc/Layout/Layout'

function App() {
    const routes = (
        <Switch>
            <Route path="/history" exact component={History} />
            <Route path="/" exact component={InstallSoft} />
            <Redirect to={'/'} />
        </Switch>
    )

    return (
        <React.StrictMode>
            <RenderPopUpContex>
                <Layout>{routes}</Layout>
            </RenderPopUpContex>
        </React.StrictMode>
    )
}

export default App
