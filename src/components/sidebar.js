import React from 'react'
import { Button, Container} from 'react-bootstrap';
import './componentstyles/navbarstyle.css';

export default function Sidebar() {
    return (

<Container fluid className="sidebarz">
    <Button className="socialbtnicon"><i class=" socialheadicons fab fa-facebook"></i>
</Button>
    <Button className="socialbtnicon"><i class="socialheadicons fab fa-instagram"></i>
</Button>
    <Button className="socialbtnicon"><i class="socialheadicons fab fa-tumblr"></i>
</Button>




</Container>

    )
}
