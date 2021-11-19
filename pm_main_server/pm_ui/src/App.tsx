import React from 'react'
import {useForm, FormProvider} from 'react-hook-form'
import {Redirect, Route, Switch} from 'react-router-dom'
import History from './containers/History/History'
import InstallSoft from './containers/InstallSoft/InstallSoft'
import Layout from './hoc/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const routes = (
        <Switch>
            <Route path="/history" exact component={History} />
            <Route path="/" exact component={InstallSoft} />
            <Redirect to={'/'} />
        </Switch>
    )

    const methods = useForm()

    return (
        <React.StrictMode>
            <FormProvider {...methods}>
                <Layout>{routes}</Layout>
            </FormProvider>
        </React.StrictMode>
    )
}

export default App
