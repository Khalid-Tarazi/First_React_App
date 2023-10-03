import data from './data.json';
import CardComp from './card';
import { useEffect, useState } from 'react';
import './main.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main() {
    let [items, setItems] = useState([]);

    async function getData() {

        const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a1d895cd74msh7450411da1694fcp12b312jsn07299232d24a',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setItems(result.results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(function () { getData() }, [])


    // function handleSubmit(event) {
    //     event.preventDefault();
    //     let searchedValue = event.target.search.value;
    //     let filteredItems = data.filter(function (item) { return item.title.toLowerCase().includes(searchedValue.toLowerCase()) })
    //     setItems(filteredItems);
    // }
    return (
        <>
            <Form className="d-flex" /*onSubmit={handleSubmit}*/ id="myForm">
                <Form.Control
                    type="search"
                    placeholder="search"
                    className="me-2"
                    aria-label="search"
                    name="search"
                />
                <Button variant="outline-success" type='submit'>Search</Button>
            </Form>

            <div id="container">
                {items.map(function (item) {
                    return (
                        <CardComp image={item.thumbnail_url} title={item.name} price={item.price.total}/>
                    )
                }
                )
                }
            </div>
        </>
    )
}

export default Main;