using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class PersonModel
	{
		public int? ID { get; private set; } = null;
		public bool? IsOwner { get; private set; } = null;
		public string FirstName { get; private set; } = null;
		public string LastName { get; private set; } = null;
		public string PhoneNumber1 { get; private set; } = null;
		public string PhoneNumber2 { get; private set; } = null;
		public string PhoneNumber3 { get; private set; } = null;
		public string PESEL { get; private set; } = null;
		public bool? IsAlive { get; private set; } = true;
		public AddressModel AddressRegistered { get; private set; } = new AddressModel();
		public AddressModel AddressCorrespondence { get; private set; } = new AddressModel();
		public AddressModel AddressAnother { get; set; } = new AddressModel();
		public EmployerModel Employer { get; private set; } = new EmployerModel();

		public PersonModel() 
		{
			IsOwner = false;
		}

		public void SetGeneral(string firstName, string lastName, bool isAlive)
		{
			FirstName = firstName;
			LastName = lastName;
			IsAlive = IsAlive;
		}

		public void SetAdresses(AddressModel addressRegistered, AddressModel addressCorrespondence, AddressModel addressAnother)
		{
			AddressRegistered = addressRegistered;
			AddressCorrespondence = addressCorrespondence;
			AddressAnother = addressAnother;
		}

		public void SetDetails(string phoneNumber1, string phoneNumber2, string phoneNumber3, string pesel, EmployerModel employer)
		{
			PhoneNumber1 = phoneNumber1;
			PhoneNumber2 = phoneNumber2;
			PhoneNumber3 = phoneNumber3;
			PESEL = pesel;
			Employer = employer;
		}

		public void SetCompanyOwner(string firstName, string lastName, string pesel)
		{
			IsOwner = true;
			FirstName = firstName;
			LastName = lastName;
			PESEL = pesel;
		}
	}
}
