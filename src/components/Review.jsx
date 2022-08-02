import React from 'react'
import axios from 'axios'

class ReviewInfo extends React.Component {
    state = {
        reviewsInfo: [],
    };

    getReviewInfo = async () => {
        const {data: {reviewInfo},} = await axios.get('https://dam1007.github.io/data/react222.json');
        this.setState({reviewsInfo: reviewInfo});
    }

    componentDidMount() {
        this.getReviewInfo()
    }

    render() {
        const {reviewsInfo} = this.state;
        return (
            <ul>
                {reviewsInfo.map((elem, index) => (
                    <li key={elem.name}>
                        <p className="review">{elem.review}</p>
                        <div className="user">
                            <div className="user-left">
                            <img src={elem.image} alt={elem.name}/>
                            <span className="profile"></span>
                            </div>
                            <div className="user-right">
                            <p><strong className="name">{elem.name}</strong>
                                <em className="info">{elem.group}</em>
                            </p>
                            <div className="star">
                                <img src={elem.star} alt="평점"/>
                            </div>
                            </div>
                        </div>
                        <div className="more">
                            <a href="/">{elem.btn}</a>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}


class Review extends React.Component {

    state = {
        id: [],
    };

    getID = async () => {
        const {data: {reviewInfo},} = await axios.get('https://dam1007.github.io/data/react222.json');
        this.setState({id: reviewInfo});
    }

    componentDidMount() {
        this.getID()
    }
    
    render() {
        const {id} = this.state;
        return (
            <section id="review">
                <div className="inner">
                    <div className="tit">
                        <h2>클래스 후기</h2>
                        <p>수강생들의 후기를 소개합니다. 믿고 맡길 수 있는 드럼 클래스 입니다.</p>
                    </div>
                    <ReviewInfo />
                </div>
            </section>
        )
    }
}

export default Review