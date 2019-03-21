//---------------------------------------------------------------------------------------
// <copyright file="IComponent-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Shared interface for all component where props are need
//--------------------------------------------------------------------------------------

import { ReactChildren } from "react";

export default interface IComponentProps {
    children: ReactChildren
}