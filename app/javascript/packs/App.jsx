import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page1 from 'page1';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={page1} />
                </Switch>
            </BrowserRouter>
        );
    };
}

export default App;