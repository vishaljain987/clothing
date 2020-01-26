import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import SigninPage from "./pages/signinpage/SigninPage";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./actions/userAction";

class App extends React.Component {
  /*
  state={
    currentUser : null
  }
*/
subscribeAuthService = null;

componentDidMount() {
  this.subscribeAuthService = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
       
       const userObj = {
        id: snapShot.id,
        ...snapShot.data()
      }
        this.props.setCurrentUser(userObj);
       
      });
    }else{
      this.props.setCurrentUser(userAuth);
    }
  });
}

  render(){
    return (
      <div>
        <Router>
          <Header />
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

const mapDispatchToProps = (dispatch, getState)=>({setCurrentUser: (user)=>dispatch(setCurrentUser(user))})
export default connect(null, mapDispatchToProps)(App);
