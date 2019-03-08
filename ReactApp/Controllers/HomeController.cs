//-----------------------------------------------------------------------
// <copyright file="HomeController.cs" website="Patrikduch.com">
//     Copyright 2019 (c) Patrikduch.com
// </copyright>
// <author>Patrik Duch</author>
//-----------------------------------------------------------------------

namespace ReactApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller for forwarding all request to the same view
    /// </summary>
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}