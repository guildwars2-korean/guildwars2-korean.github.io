import './gw2card.css';
import { Accordion } from 'react-bootstrap';


function Gw2card(props) {
    let defaultActiveKey = props.defaultActiveKey;
    if (props.header != null) {
        if (props.header === '1') defaultActiveKey = "0";
        if (props.header === '2') defaultActiveKey = "0";
        if (props.header === '3') defaultActiveKey = "0";
        if (props.header === '4') defaultActiveKey = "0";
        if (props.header === '5') defaultActiveKey = "0";
    }

    return (
      <Accordion defaultActiveKey={defaultActiveKey}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.header}</Accordion.Header>
          <Accordion.Body>
            {props.children}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }

export default Gw2card;