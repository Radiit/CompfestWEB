import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Carousel, Col, Container, Row } from 'react-bootstrap';

const List = () => {
  const [ListData, setListData] = useState([]);

  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = async () => {
    try {
      const response = await axios.get('https://seleksi-sea-2023.vercel.app/api/movies');
      setListData(response.data);
    } catch (error) {
      console.error('Error fetching List data:', error);
    }
  };

  const renderListCards = () => {
    const displayedCards = ListData.slice(0, 5);

    return displayedCards.map((item) => (
      <Carousel.Item key={item.id} className='movieList'>
        <div className="card text-dark text-center">
          <img className="card-img" src={item.poster_url} alt="Card image" />
          <h5 className="card-title">{item.title}</h5>
        </div>            
      </Carousel.Item>
    ));
  };

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Carousel  wrap={false} interval={3000}>
                      {renderListCards()}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default List;
