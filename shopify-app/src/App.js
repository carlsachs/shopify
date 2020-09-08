import React, { useEffect, useState } from "react";
import axios from "axios";

//styling
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

//styled-components
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    textAlign: center;
`;

const TitleTop = styled.div`
  margin: 0 auto;
`;

const TitleTopOne = styled.div`
  margin: 0 auto;
  color: #1e9e5b;
`;

const TopHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: green;
`;

const AllCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  margin: 0 auto;
  flex-flow: row nowrap;
`;

const CardWrap = styled.div`
  border: 1px solid #26a362;
  border-radius: 5%;
  padding: 5%;
  margin: 3%;
`;

const Card = styled.div`
marginTop: 5%;
`;

const MovieTitle = styled.div`
  color: #096937;
`;

const Year = styled.div`
  color: #1e9e5b;
`;

const Bottom = styled.div``;

const Movies = (props) => {

    const [data, setData] = useState([[]]);
    const [query, setQuery] = useState("");
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

        <TopHalf>

            <TitleTopOne>
                <h1>The Shoppies</h1>
            </TitleTopOne>

            <TitleTop>
                <h2>Movies up for Nomination</h2>
            </TitleTop>

            <Form style={{
              textAlign: "center"
            }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search Movies</Form.Label>
                    <Form.Control 
                    style={{width: "50%", margin: "0 auto"}}
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

            </TopHalf>

            <AllCards>

              {data ? (


                data.map((props, i) => (
                 <CardWrap>
                 <Card key={i}>
                 <MovieTitle>
                    <h3>{Object.values([props.Title])}</h3>
                  </MovieTitle>
                  <Year>
                    <h2>{Object.values([props.Year])}</h2>
                  </Year>
                  <Button variant="outline-success" onClick={handleClick}>Nominate</Button>                  
                  </Card>
                </CardWrap>
                ))
              ) : (<div></div>)}

            </AllCards>
            <Bottom>


            
            </Bottom>
        
        </Wrapper>
    )
}

export default Movies;