using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OmniLoan.Models;



namespace OmniLoan.Controllers
{
    public class LoanFormController : Controller
    {
		[HttpGet]
        public IActionResult Form()
        {
            return View();
        }

		[HttpGet]
		public IActionResult GetForm()
		{
			LoanModel loan = new LoanModel();

			return Json(loan);
		}

		public IActionResult SendForm(string data)
		{ 

			return Content(data);
		}
	}
}
