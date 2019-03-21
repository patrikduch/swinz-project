import IComponentProps from "../shared/IComponent-Props";
import { ReactNodeArray } from "prop-types";
import { ReactNode } from "react";



export default interface IAdminAuthSuccessProps{

    isNav: boolean, // is authentification for navigation
    nestedChildren: any; // Nested children from root component

    input: {
        tokenString: string
    }


}