using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class EmployerModel
	{
		public int? ID { get; private set; } = null;
		public string Name { get; private set; } = null;
		public AddressModel Adress { get; private set; } = new AddressModel();
		public string NIP { get; private set; } = null;
		public string REGON { get; private set; } = null;

		public EmployerModel(string name, AddressModel adress, string nip, string regon)
		{
			Name = name;
			Adress = adress;
			NIP = nip;
			REGON = regon;
		}

		public EmployerModel(){ }

		public void SetGeneral(string name, string nip)
		{
			Name = name;
			NIP = nip;
		}

		public void SetDetails(AddressModel adress, string regon)
		{
			Adress = adress;
			REGON = regon;
		}
	}
}
