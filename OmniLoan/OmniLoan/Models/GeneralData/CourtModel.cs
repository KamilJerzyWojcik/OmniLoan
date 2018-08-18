using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class CourtModel
	{

		public int? ID { get; private set; } = null;
		public string Name { get; private set; } = null;
		public AddressModel Address { get; private set; } = new AddressModel();
		public string PhoneNumber { get; private set; } = null;
		public long? BankAccount { get; private set; } = null;


		public CourtModel(string name, AddressModel adress, string phoneNumber, long bankAccount)
		{
			Name = name;
			Address = adress;
			PhoneNumber = phoneNumber;
			BankAccount = bankAccount;
		}

		public CourtModel(){ }

		public void SetGeneral(string name, AddressModel adress)
		{
			Name = name;
			Address = adress;
		}

		public void SetDetails(string phoneNumber, long bankAccount)
		{
			PhoneNumber = phoneNumber;
			BankAccount = bankAccount;
		}
	}
}
