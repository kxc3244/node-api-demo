import publicAPIList from "./publicAPIList.json";
import {Card, CardBody,CardTitle, CardText,Button } from 'reactstrap';


function ApiCard() {

  console.log(publicAPIList, 'CHECK')

  return (
    <div>
        {publicAPIList.entries.map((apiItem, index) => {
          return (
            <Card
              body
              color="dark"
              outline
              key={index}
              style={{margin: "20px", backgroundColor: "lightgrey"}}
            >
              <CardBody>
                <CardTitle tag="h5">
                  {apiItem.API}
                </CardTitle>
                <CardText>
                  <strong>Description:</strong> {apiItem.Description}
                </CardText>
                <CardText>
                  <strong>Category:</strong> {apiItem.Category}
                </CardText>
                <CardText>
                  <strong>Auth:</strong> {apiItem.Auth}
                </CardText>
                <CardText>
                  <strong>HTTPS:</strong> {apiItem.HTTPS ? "Yes" : "NO"}
                </CardText>
                <CardText>
                  <strong>CORS:</strong> {apiItem.Cors ? "Yes" : "NO"}
                </CardText>
                <Button onClick={()=>{window.open(apiItem.Link)}}>
                  Give it a Try!
                </Button>
              </CardBody>
            </Card>
          )
        })}

    </div>
  );
}

export default ApiCard;
