#region Copyright Syncfusion Inc. 2001 - 2013
// Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
// Use of this code is subject to the terms of our license.
// A copy of the current license can be obtained at any time by e-mailing
// licensing@syncfusion.com. Any infringement will be prosecuted under
// applicable laws. 
#endregion
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EDT.Infrastructure;
using EDT.Models;

namespace EDT.Controllers
{
    public class groups
    {
        public string text { get; set; }
        public string parentId { get; set; }
        public int id { get; set; }
        public int parent { get; set; }
    }
    public class Countries
    {
        public string text { get; set; }
        public string category { get; set; }
        public int value { get; set; }
        public string parentId { get; set; }
        public string sprite { get; set; }
        public string country { get; set; }
        public int id { get; set; }
        public int parent { get; set; }
    }
   


    public class HomeController : Controller
    {

        public ActionResult EvaluationPortal(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Welcome Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }
        public ActionResult VirtualSchoolhouse(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Welcome Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }
        public ActionResult CBTS(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Welcome Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }
        public ActionResult OutbasedVideos(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Welcome Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }
        
        public ActionResult Welcome(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Welcome Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult Mission(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Mission Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult About(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "About Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }
        
        public ActionResult TrainingResources(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Training Resources Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult StaffListing(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Staff Listing Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult WhatsNew(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "What's New Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }


        public ActionResult Sitemap(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Sitemap Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult TDS(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "TDS Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult Index(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Home Page";
            ViewBag.Dev = dev ?? false;
            return View();
        }
       
        public ActionResult Calendar(bool? dev)
        {
            ViewBag.Message = "Calendar Description...";
            ViewBag.Location = "Calendar";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult Faqs(bool? dev)
        {
            ViewBag.Message = "FAQS Description...";
            ViewBag.Location = "FAQS";
            ViewBag.Dev = dev ?? false;

            return View();
        }

   
           
       

       




        [AcceptVerbs(HttpVerbs.Get)]
        public ActionResult DownloadFile(bool? dev, string filename)
        {
            ViewBag.Dev = dev ?? false;
            return new Utils.DownloadResult { VirtualPath = "~/Assets/Documents/" + filename, FileDownloadName = filename };
        }





    }
}
