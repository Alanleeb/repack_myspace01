import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import '../cards.css';
import Cards, { Card } from 'react-swipe-card';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


class Home extends Component {
  state = { profiles: [] }

  componentDidMount() {
    axios.get('/api/profiles')
      .then( res => {
        this.setState({ cats: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers });
    });
  }
  

    render() {
      return(
        
        <Cards className="profiles-root">
         <Link to="/MyProfiles">My Profiles</Link>
          { this.state.profiles.map( profile =>
              <Card key={profile.id}>
                <h2>{profile.user_name}</h2>
                <Image src={profile.avatar} />
                <h3>{profile.age}</h3>
                <h3>{profile.quote}</h3>
              </Card>
              
            )
          }
        </Cards>
      );
    }
}

export default Home;
