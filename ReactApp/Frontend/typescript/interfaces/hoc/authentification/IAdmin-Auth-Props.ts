//---------------------------------------------------------------------------------------
// <copyright file="IAdmin-Auth-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Interface for propeties of admin authentification
//----------------------------------------------------------------------------------------

import IComponentProps from "../../components/shared/IComponent-Props";

export default interface IAdminAuthProps extends IComponentProps {
    isNav: boolean, // is authentification for navigation
}