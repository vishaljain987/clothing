import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverview from "../../components/collectionoverview/CollectionOverview";
import CollectionPage from "../collectionpage/CollectionPage";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollection} from "../../actions/shopAction";
import WithSpinner from "../../components/withspinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
        

 class ShopPage extends React.Component{

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const collectionRef = firestore.collection("collections");

        //using promise pattern
        collectionRef.get()
            .then(
                snapShot=>{
                    const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
                    this.props.updateCollections(collectionsMap);
                    this.setState({loading: false})
                    console.log(this.state.loading);
                }
            )

        /*
        //using subscription pattern
        collectionRef.onSnapshot(async (snapShot)=>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            this.props.updateCollections(collectionsMap);
            this.setState({loading: false})
            console.log(this.state.loading);
        })
        */
    }
        
    render(){
        
        return (
            
            <div>
                <Route exact path={`${this.props.match.path}`} render={(props)=>(<CollectionOverviewWithSpinner isLoading={this.state.loading} {...props}/>)} />
                <Route path={`${this.props.match.path}/:category`} render={(props)=>(<CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>)} />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch, getState)=>{
    return{
        updateCollections: (collectionsMap)=>dispatch(updateCollection(collectionsMap))
    }
}


export default connect(null, mapDispatchToProps)(ShopPage);