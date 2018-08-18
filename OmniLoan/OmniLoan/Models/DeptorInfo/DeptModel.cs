using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class DeptModel
	{
		
		public int? ID { get; private set; } = null;
		public decimal? Amount { get; private set; } = null;
		public decimal? Capital { get; private set; } = null;
		public decimal? Interest { get; private set; } = null;
		public decimal? InterestPenalty { get; private set; } = null;
		public DateTime? DateLastUpdateInterestPenalty { get; private set; } = new DateTime();
		public InterestPenaltyType? TypePenalty { get; private set; } = null;
		public int? InterestPenaltynumber { get; private set; } = null;
		public decimal? FeesAndCommissions { get; private set; } = null;




		public DeptModel(decimal amount, decimal capital, decimal interest, decimal interestPenalty, InterestPenaltyType typePenalty, decimal feesAndCommissions)
		{
			Amount = amount;
			Capital = capital;
			Interest = interest;
			InterestPenalty = interestPenalty;
			TypePenalty = typePenalty;
			FeesAndCommissions = feesAndCommissions;
			DateLastUpdateInterestPenalty = DateTime.Now;
		}

		public DeptModel() 
		{
			DateLastUpdateInterestPenalty = DateTime.Now;
		}

		public void SetGeneral(decimal amount, decimal capital, decimal feesAndCommissions)
		{
			Amount = amount;
			Capital = capital;
			FeesAndCommissions = feesAndCommissions;
		}

		public void SetDetails(decimal interest, decimal interestPenalty, InterestPenaltyType typePenalty)
		{
			Interest = interest;
			InterestPenalty = interestPenalty;
			TypePenalty = typePenalty;
		}
	}
}
