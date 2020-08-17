using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Task4.ViewModels;

namespace Task4.Models
{
    public class User : IdentityUser
    {
        public DateTimeOffset DateCreate { get; set; }
        public DateTimeOffset Lastlogin { get; set; }
        public string Status { get; set; }
        public bool IsSelected { get; set; }
    }
}
