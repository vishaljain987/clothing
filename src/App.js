import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import SigninPage from "./pages/signinpage/SigninPage";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  state={
    currentUser : null
  }

subscribeAuthService = null;

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    }else{
      this.setState({ currentUser: userAuth });
    }
  });
}

  render(){
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SigninPage}/>
        </Router>
  
      </div>
    );
  }

  componentWillUnmount(){
    this.subscribeAuthService();
  }

}

export default App;
