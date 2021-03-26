import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Spinner } from './components/loading/styles/loading';

const SignIn = lazy(() => import('./pages/signin'));
const SignUp = lazy(() => import('./pages/signup'));
const Browse = lazy(() => import('./pages/browse'));
const Home = lazy(() => import('./pages/home'));

export default function App() {
    const { user } = useAuthListener();

    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <IsUserRedirect
                        user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_IN}
                    >
                        <SignIn />
                    </IsUserRedirect>
                    <IsUserRedirect
                        user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_UP}
                    >
                        <SignUp />
                    </IsUserRedirect>
                    <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                        <Browse />
                    </ProtectedRoute>
                    <IsUserRedirect
                        user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.HOME}
                        exact
                    >
                        <Home />
                    </IsUserRedirect>
                </Switch>
            </Suspense>
        </Router>
    );
}
