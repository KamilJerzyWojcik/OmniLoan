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
		public AddressModel Address { get; private set; } = new AddressModel();
		public string NIP { get; private set; } = null;
		public string REGON { get; private set; } = null;

		public EmployerModel(string name, AddressModel address, string nip, string regon)
		{
			Name = name;
			Address = address;
			NIP = nip;
			REGON = regon;
		}

		public EmployerModel(){ }

		public void SetGeneral(string name, string nip)
		{
			Name = name;
			NIP = nip;
		}

		public void SetDetails(AddressModel address, string regon)
		{
			Address = address;
			REGON = regon;
		}
	}
}
