using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class CompanyModel
	{

		public int? ID { get; private set; } = null;
		public string Name { get; private set; } = null;
		public string NIP { get; private set; } = null;
		public string REGON { get; private set; } = null;
		public string KRS { get; private set; } = null;
		public List<string> PhoneNumber { get; private set; } = null;
		public AddressModel AddressCorrespondence { get; private set; } = new AddressModel();
		public AddressModel AddressCompany { get; private set; } = new AddressModel();
		public AddressModel AddressCompanyAdditional { get; private set; } = new AddressModel();
		public AddressModel[] AddressAnother { get; private set; } = new AddressModel[] { };
		public PersonModel Owner { get; private set; } = new PersonModel();

		public CompanyModel(string name, string nip, string regon, string krs, List<string> phoneNumber, AddressModel addressCorrespondence, AddressModel addressCompany, AddressModel addressCompanyAdditional, AddressModel[] addressAnother, PersonModel owner)
		{
			Name = name;
			NIP = nip;
			REGON = regon;
			KRS = krs;
			PhoneNumber = phoneNumber;
			AddressCorrespondence = addressCorrespondence;
			AddressCompany = addressCompany;
			AddressCompanyAdditional = addressCompanyAdditional;
			AddressAnother = addressAnother;
			Owner = owner;
		}

		public CompanyModel(){ }

		public void SetGeneral(string name, PersonModel owner, string nip)
		{
			Name = name;
			Owner = owner;
			NIP = nip;
		}

		public void SetDetails(string regon, string krs, List<string> phoneNumber)
		{
			phoneNumber = PhoneNumber;
			REGON = regon;
			KRS = krs;
		}

		public void SetAdresses(AddressModel addressCorrespondence, AddressModel addressCompany, AddressModel[] addressAnother, AddressModel addressCompanyAdditional)
		{
			AddressCorrespondence = addressCorrespondence;
			AddressCompany = addressCompany;
			AddressAnother = addressAnother;
			AddressCompanyAdditional = addressCompanyAdditional;
		}
	}
}
