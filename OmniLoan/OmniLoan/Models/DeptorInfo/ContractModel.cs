using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class ContractModel
	{

		public int? ID { get; private set; } = null;
		public string Number { get; private set; } = null;
		public string Name { get; private set; } = null;
		public DateTime? DateConclusion { get; private set; } = DateTime.Now;
		public DeptModel Dept { get; private set; } = new DeptModel();
		public DateTime? DateContractTermination { get; private set; } = DateTime.Now;

		public ContractModel(string number, string name, DateTime dateConclusion, DeptModel dept, DateTime dateContractTermination)
		{
			Number = number;
			Name = name;
			DateConclusion = dateConclusion;
			Dept = dept;
			DateContractTermination = dateContractTermination;
		}

		public ContractModel(){ }

		public void SetGeneral(string number, string name)
		{
			Number = number;
			Name = name;
		}

		public void SetDetails(DateTime dateConclusion, DeptModel dept, DateTime dateContractTermination)
		{
			DateConclusion = dateConclusion;
			Dept = dept;
			DateContractTermination = dateContractTermination;
		}


	}
}
