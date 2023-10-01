import data from './data.json';
import CardComp from './card';
import { useState } from 'react';
import './main.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main() {
    let [items, setItems] = useState(data);

    function handleSubmit(event) {
        event.preventDefault();
        let searchedValue = event.target.search.value;
        let filteredItems = data.filter(function (item) { return item.title.toLowerCase().includes(searchedValue.toLowerCase()) })
        setItems(filteredItems);
    }
    return (
        <>
            <Form className="d-flex" onSubmit={handleSubmit} id="myForm">
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
                        <CardComp image={item.image_url} title={item.title} description={item.description} />
                    )
                }
                )
                }
            </div>
        </>
    )
}

export default Main;