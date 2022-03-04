import './App.css';
import Homepage from './Pages/Homepage';
import Hotels from './Pages/Hotels';
import HotelDetail from './Pages/Hotel-Detail';
import Attraction from './Pages/Attraction';
import AttractionDetail from './Pages/Attraction-Detail';
import LuxuryTrainListing from './Pages/Luxury-Train-Listing';
import LuxuryTrainDetail from './Pages/Luxury-Train-Detail';
import HotelReview from './Pages/Hotel-Review';
import ReviewerDetails from './Pages/Reviewer-Details';
import AttractionImproveListing from './Pages/Attraction-Improve-Listing';
import SearchResult from './Pages/Search-Result';
import ReviewVisitedPlace from './Pages/Review-Visited-Place';
import HotelPlaces from './Pages/Hotel-Places';
import CategoryListingHotel from './Pages/Category-Listing-Hotel';
import CategoryListingNearByHotel from './Pages/Category-Listing-NearBy-Hotel';
import WriteReview from './Pages/Write-Review';
import Uiguidline from './Pages/UI-Guidline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
     <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Hotels" component={Hotels} />
        <Route exact path="/Hotel-Detail" component={HotelDetail} />
        <Route exact path="/Attraction" component={Attraction} />
        <Route exact path="/Attraction-Detail" component={AttractionDetail} />
        <Route exact path="/Luxury-Train-Listing" component={LuxuryTrainListing} />
        <Route exact path="/Luxury-Train-Detail" component={LuxuryTrainDetail} />
        <Route exact path="/Hotel-Review" component={HotelReview} />
        <Route exact path="/Reviewer-Details" component={ReviewerDetails} />
        <Route exact path="/Attraction-Improve-Listing" component={AttractionImproveListing} />
        <Route exact path="/Search-Result" component={SearchResult} />
        <Route exact path="/Review-Visited-Place" component={ReviewVisitedPlace} />
        <Route exact path="/Hotel-Places" component={HotelPlaces} />
        <Route exact path="/Category-Listing-Hotel" component={CategoryListingHotel} />
        <Route exact path="/Category-Listing-NearBy-Hotel" component={CategoryListingNearByHotel} />
        <Route exact path="/Write-Review" component={WriteReview} />
        <Route exact path="/Uiguidline" component={Uiguidline} />
        
        
        
        
     </Router>
  );
}

export default App;