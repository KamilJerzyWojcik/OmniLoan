using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using OmniLoan.Models;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
			//AddressModel adres = new AddressModel("kopernika", "12", "2", "12-202", "Wrocław");
			LoanModel adres = new LoanModel();

			return Json(adres);
		}
	}
}
