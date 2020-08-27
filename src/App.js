import React, {useState} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'

import HeaderBar from './components/header-bar/header-bar.component';
import Footer from './components/footer/footer.component';
import AboutPage from './pages/about-page/about-page.component';
import HomePage from './pages/home-page/home-page.component';
import TrainingPrograms from './pages/training-programs/training-programs.component';
import ContactPopup from './components/contact-popup/contact-popup.component';
import TransformationsPage from './pages/transformations-page/transformations-page.component';
import LifeCoaching from './pages/life-coaching-page/life-coaching-page.component';
import MotivationalSpeaking from './pages/motivational-speaking-page/motivational-speaking-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page';


class App extends React.Component {
  render() {
    return (
    <div>
      <HeaderBar />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/training-programs' component={TrainingPrograms} />
      <Route exact path='/transformations' component={TransformationsPage} />
      <Route exact path='/life-coaching' component={LifeCoaching} />
      <Route exact path='/motivational-speaking' component={MotivationalSpeaking} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Footer />
      <ContactPopup />
    </div>
  );
}
}

export default App;
