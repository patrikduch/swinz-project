import *  as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props: any) => {

    const [dataState, setState] = React.useState(
        {
            isOpen: false
        }

    );

    const toggler = () => {

        setState({
            isOpen: !dataState.isOpen
        });
    }

    return (
        <span>
            <Button onClick={() => toggler()} color="secondary" size="sm"><FontAwesomeIcon icon={props.btnIcon} /></Button>

            <Modal size='lg' isOpen={dataState.isOpen} toggle={toggler}>
                <ModalHeader toggle={toggler}>{props.title}</ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggler}>Uložit změny</Button>{' '}
                    <Button color="secondary" onClick={toggler}>Zrušit</Button>
                </ModalFooter>
            </Modal>
        </span>

    );


}