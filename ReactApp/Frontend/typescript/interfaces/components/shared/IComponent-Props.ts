//---------------------------------------------------------------------------------------
// <copyright file="IComponent-Props.ts" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Shared interface for all component where props are needed
//--------------------------------------------------------------------------------------

import { ReactNodeArray } from "prop-types";

export default interface IComponentProps {
    children: ReactNodeArray
}