using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OmniLoan.Models
{
	public class AddressModel
	{
		public string ID { get; private set; } = null;
		public string Street { get; private set; } = null;
		public string NumberBuilding { get; private set; } = null;
		public string NumberFlat { get; private set; } = null;
		public string ZipCode { get; private set; } = null;
		public string City { get; private set; } = null;

		public AddressModel(string street, string numberBuilding, string numberFlat, string zipCode, string city)
		{
			Street = street;
			NumberBuilding = numberBuilding;
			NumberFlat = numberFlat;
			ZipCode = zipCode;
			City = city;
		}

		public AddressModel() { }

		public void SetGeneral(string street, string city)
		{
			Street = street;
			City = city;
		}

		public void SetDetails(string numberBuilding, string numberFlat, string zipCode)
		{
			NumberBuilding = numberBuilding;
			NumberFlat = numberFlat;
			ZipCode = zipCode;
		}

	}
}
