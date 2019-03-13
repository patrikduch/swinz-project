//-----------------------------------------------------------------------
// <copyright file="Classic-Modal.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Modal with content support
//-----------------------------------------------------------------------

import *  as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IClassicModalProps from '../../../typescript/interfaces/components/common/modals/classic-modal/IClassic-Modal-Props';

export default (props: IClassicModalProps) => {

    const [dataState, setState] = React.useState(
        {
            isOpen: false
        }
    );

    const data = {
        firstName: "hello",
        surname: "Worldik"
    }

    const registerUser = () => {
        toggler();
        props.methods[0](data);
    }

    const toggler = () => {


        setState({
            isOpen: !dataState.isOpen
        });
    }

    console.log(props);

    return (
        <span>
            <Button onClick={ () => toggler() } color="secondary" size="sm"><FontAwesomeIcon icon={ props.btnIcon } /></Button>

            <Modal size='lg' isOpen={ dataState.isOpen } toggle={toggler}>
                <ModalHeader toggle={ toggler }>{ props.title }</ModalHeader>
                <ModalBody>
                    <Button onClick={() => registerUser()}></Button>
                </ModalBody>
                <ModalFooter>
                    {props.showModalBtn &&  <div>
                        <Button color="primary" onClick={ toggler }>Uložit změny</Button>
                        <Button color="secondary" onClick={ toggler }>Zrušit</Button>
                    </div> }
                   
                </ModalFooter>
            </Modal>
        </span>

    );


}