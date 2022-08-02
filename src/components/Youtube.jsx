import React from 'react'
import axios from 'axios'

class Youtube extends React.Component {

    state = {
      youtubes : [],
    };

    getYoutubs = async () => {
      const {data: {youtubeInfo},} = await axios.get('https://dam1007.github.io/data/react222.json');
     
      this.setState({youtubes: youtubeInfo});
    };

    componentDidMount() {
      this.getYoutubs()
    }
    
    render() {
      const { youtubes } = this.state;
      return (
        <section id="youtube">
          <div className="inner">
              <div className="desc">
                <h2>{youtubes.title}</h2>
                <p>{youtubes.desc1}<br/>
                {youtubes.desc2}</p>
                <a href="/">{youtubes.btn}</a>
              </div>
          </div>
      </section>
      )
    }
}

export default Youtube;