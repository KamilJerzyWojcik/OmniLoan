using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class CityHallModel
	{
		
		public int? ID { get; private set; } = null;
		public string Name { get; private set; } = null;
		public List<long?> BankAccount { get; private set; } = new List<long?>();

		public CityHallModel(){ }

		public CityHallModel(string name, List<long?> bankAccount)
		{
			Name = name;
			BankAccount = bankAccount;
		}
	}
}
