import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


//styling
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

//styled-components
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const CardWrap = styled.div`

`;

const Card = styled.div``;

const MovieTitle = styled.div``;

const Year = styled.div``;

const Cover = styled.div``;



const Box = styled.div``;

const Title = styled.div``;

const Movies = (props) => {

    const [data, setData] = useState([[]]);
    const [query, setQuery] = useState("");
    const [normal, setNormal] = useState();
    const [nom, setNom] = useState([]);

      useEffect(() => {
        axios
            .get(`http://www.omdbapi.com/?s=${query}&apikey=a06127f9`)
            .then(res => {
                console.log(res);
                // const searchResult = res.data.filter(item => item.Title.toLowerCase().includes(query.toLowerCase()));
                setData(res.data.Search);
            })
            .catch(err => console.log(err));
    }, [query, data]);

    const handleChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
    };

    return (
        <Wrapper>

            <Title>
                <h2>Movies up for Nomination</h2>
            </Title>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search Movies</Form.Label>
                    <Form.Control 
                    onChange={handleChange}
                    type="text"
                    name="search"
                    value={query}
                    placeholder="Search Movies by Title" />
                    <Form.Text className="text-muted">
                    Search movies by title to start nominating for The Shoppies!
                    </Form.Text>
                </Form.Group>
            </Form>

            <AllCards>

              {data ? (


                data.map((props) => (
                 <CardWrap>
                 <Card>
                 <MovieTitle>
                    <h5>{Object.values([props.Title])}</h5>
                  </MovieTitle>
                  <Year>
                    <h2>{Object.values([props.Year])}</h2>
                  </Year>
                  <Cover>
                    <img src={Object.values([props.Poster])} alt="cover art for said film"/>
                  </Cover>
                  </Card>
                </CardWrap>
                ))
              ) : (<div></div>)}

            </AllCards>
        
        </Wrapper>
    )
}

export default Movies;