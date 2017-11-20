const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Popular = require('./Popular');
const Navbar = require('./Navbar');
const Home = require('./Home');
const Battle = require('./Battle');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/popular" component={Popular} />
            <Route render={() => {
              return (
                <h1> Not Found </h1>
              )
            }} />
          </Switch>
        </div>
      </Router>
      )
    }
  }

  module.exports = App;