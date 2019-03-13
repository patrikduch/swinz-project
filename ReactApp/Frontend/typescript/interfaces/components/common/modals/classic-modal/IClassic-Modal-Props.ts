//-----------------------------------------------------------------------
// <copyright file="IClassic-Modal-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for properties of Classic modal component
//-----------------------------------------------------------------------

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface IClassicModalProps {

    btnIcon: IconProp, 
    title: string, // Title for the modal
    data: any,
    showModalBtn: boolean

}