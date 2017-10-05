using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Pioneer.SalesTrackerV2.Api.Controllers
{
    [EnableCors("*", "*", "*")]
    public class BuyersController : ApiController
    {
        public static int Id = 1;
        public static List<Buyer> buyers = new List<Buyer>()
        {
            new Buyer () { Id = Id++, Address = "Serampore", Name = "Tanvir", CreatedDate = DateTime.Now  },
            new Buyer () { Id = Id++, Address = "test", Name = "test", CreatedDate = DateTime.Now  },
            new Buyer () { Id = Id++, Address = "test1", Name = "test1", CreatedDate = DateTime.Now  }

        };

        public BuyersController()
        {
        }

        [HttpGet]
        public IHttpActionResult GetBuyers()
        {
            try
            {
                return Ok(buyers);
            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }

        [HttpGet]
        public IHttpActionResult GetBuyerById(int id)
        {
            try
            {
                var buyer = buyers.FirstOrDefault(x => x.Id == id);
                return Ok(buyer);
            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }

        [HttpPost]
        public IHttpActionResult SaveBuyer(Buyer buyer)
        {
            try
            {
                if (buyer.Id > 0)
                {
                    var existBuyer = buyers.FirstOrDefault(x => x.Id == buyer.Id);
                    existBuyer.Name = buyer.Name;
                    existBuyer.Address = buyer.Address;
                }
                else
                {
                    buyer.Id = Id++;
                    buyer.CreatedDate = DateTime.Now;
                    buyers.Add(buyer);
                }
                return Ok(buyer);
            }
            catch (Exception exception)
            {
                return InternalServerError(exception);
            }

        }




    }

    public class Buyer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
