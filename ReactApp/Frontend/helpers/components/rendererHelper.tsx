//-----------------------------------------------------------------------
// <copyright file="rendererHelper.tsx" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
// Set of helper functions for component manipulations
//-----------------------------------------------------------------------

// Helper method for getting unique identifier for react elements
export function getUniqueId() {
  var uniqid = require("uniqid");
  return uniqid.process();
}
