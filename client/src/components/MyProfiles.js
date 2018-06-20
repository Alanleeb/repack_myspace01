import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class MyProfiles extends React.Component {
  state = { profiles: [] }

  componentDidMount() {
    axios.get('/api/MyProfiles')
      .then( res => {
        this.setState({ profiles: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { profiles } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { profiles.map( profile =>
            <Card key={profile.id}>
              <Card.Content>
                <Image src={profile.avatar} />
                <Divider />
                <Card.Header>
                  {profile.name}
                </Card.Header>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(MyProfiles)