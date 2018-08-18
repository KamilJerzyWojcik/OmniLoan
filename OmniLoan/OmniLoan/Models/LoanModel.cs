using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class LoanModel
	{


		public int? ID { get; private set; } = null;
		public bool? IsDeptorCompany { get; private set; } = null;
		public PersonModel DeptorPerson { get; private set; } = new PersonModel();
		public CompanyModel DeptorCompany { get; private set; } = new CompanyModel();
		public ContractModel Contract { get; private set; } = new ContractModel();
		public EmployerModel Employer { get; private set; } = new EmployerModel();
		public CityHallModel CityHall { get; private set; } = new CityHallModel();
		public CourtModel Court { get; private set; } = new CourtModel();
		

		public LoanModel(){

			DeptorPerson = new PersonModel();
			DeptorPerson.SetCompanyOwner(null, null, null);


		}

		public void SetDeptor(PersonModel deptorPerson, EmployerModel employer, bool? isDeptorCompany)
		{
			IsDeptorCompany = IsDeptorCompany;

			if (IsDeptorCompany == false)
			{
				DeptorPerson = deptorPerson;
				Employer = employer;
			}
			else
			{
				DeptorPerson = null;
				Employer = null;
			}
		}

		public void SetDeptor(CompanyModel deptorCompany, bool? isDeptorCompany)
		{
			if (IsDeptorCompany == true)
			{
				DeptorCompany = deptorCompany;
			}
			else
			{
				DeptorCompany = null;
			}
		}

		public void SetDetails(CityHallModel cityHall, CourtModel court, ContractModel contract)
		{
			CityHall = cityHall;
			Court = court;
			Contract = contract;
		}
	}
}
