import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import SigninPage from "./pages/signinpage/SigninPage";
import CheckOut from "./pages/checkout/CheckOut";
import {auth, createUserProfileDocument, addCollectionAndDocuments} from "./firebase/firebase.utils";
import {setCurrentUser} from "./actions/userAction";
import {selectUserCurrent} from "./utils/user.selector";
//import {SHOP_DATA} from "./pages/shoppage/shop.data";

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

  //one time dataload
  //addCollectionAndDocuments('collections', SHOP_DATA.map(({title, items})=>({title, items})));
}

  render(){
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" render={()=>this.props.currentUser ? (<Redirect to="/" />) : (<SigninPage />)}/>
          <Route path="/checkout" component={CheckOut} />
        </Router>
  
      </div>
    );
  }

  componentWillUnmount(){
    this.subscribeAuthService();
  }

}

//const mapStateToProps = state=>({currentUser: state.user.currentUser})

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrent
})
const mapDispatchToProps = (dispatch, getState)=>({setCurrentUser: (user)=>dispatch(setCurrentUser(user))})
export default connect(mapStateToProps, mapDispatchToProps)(App);
