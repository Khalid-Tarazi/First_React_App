import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';


function Main() {
    return (
        <>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between",gap:"5px", marginTop:"5%"}}>
                {data.map(function (item) {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image_url} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Button variant="primary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    )
                }
                )
                }
            </div>
        </>
    )
}

export default Main;