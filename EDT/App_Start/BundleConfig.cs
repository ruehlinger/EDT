using System.Web.Optimization;

namespace EDT
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.UseCdn = true;
            bundles.IgnoreList.Clear();

            /************************************************
             *                    SCRIPTS                             
             * *********************************************/
            //1).
            bundles.Add(new ScriptBundle("~/bundles/easejs").Include(
                "~/Scripts/jquery.easing.1.3.js",
                "~/Scripts/jquery.easing.compatibility.js"
                ));
            //2).
            bundles.Add(new ScriptBundle("~/bundles/ejjs").Include(
                "~/Scripts/theme/ej.web.all.min.js",
                "~/Scripts/jquery.easing-1.3.min.js",
                "~/Scripts/jquery.globalize.js"
                ));
            //3).
            bundles.Add(new ScriptBundle("~/bundles/sitejs").Include(
                        "~/Js/Site.js"));
            //4).
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/holder.js"));
            //5).
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-2.1.1.js",
                //"~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-migrate-1.2.1.js"));
            //6).
            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));
            //7).
            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));
            //8).
            bundles.Add(new ScriptBundle("~/bundles/respond").Include(
                        "~/Scripts/html4shiv.js",
                        "~/Scripts/respond.matchmedia.addListener.min.js",
                        "~/Scripts/respond.min.js"));

            //9).
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            //10).
            //Calendar Loader
            bundles.Add((new ScriptBundle("~/bundles/cal").Include("~/Js/fullcalendar.js",
                "~/Js/fullcalendar.min.js",
                "~/Js/calload.js")));
            /************************************************
             *                    STYLES                             
             * *********************************************/
            //const string bscdnpath = "http://nttlsrv01/VBAResourceStore/Content/bootstrap.min.css";
            //const string bsthemecdnpath = "http://nttlsrv01/VBAResourceStore/Content/bootstrap-theme.css";
            //bundles.Add(new StyleBundle("~/Content/bscss", bscdnpath).I;
            //1).
            bundles.Add(new StyleBundle("~/bundles/bscss").Include(
                                        "~/Content/bootstrap.min.css",
                                        "~/Content/bootstrap-theme.css"));
            //2).
            bundles.Add(new StyleBundle("~/bundles/ej").Include(
                    "~/Content/ej.widgets.core.min.css",
                    "~/Content/ej/ej.widgets.all.min.css",
                    "~/Content/ej/flat-azure-dark/ej.theme.min.css"
                ));
            //2).
            bundles.Add(new StyleBundle("~/bundles/bscss-ie7").Include("~/Content/bootstrap-ie7.css"));
            //3).
            bundles.Add(new StyleBundle("~/bundles/css-ie8").Include(
                  "~/Content/SiteLocalIE8.css"));
            //4).
            bundles.Add(new StyleBundle("~/bundles/css-ie7").Include(
                  "~/Content/SiteIE7.css",
                  "~/Content/Colors.css"));
            //5).
            bundles.Add(new StyleBundle("~/bundles/css").Include(
                //"~/Content/flexdown.css",
                        "~/Content/Site00.css",
                        "~/Content/Site.css",
                        "~/Content/Colors.css",
                        "~/Content/SiteLocal.css",
                        "~/Content/chevronMenu.css",   
                        "~/Content/fullcalendar.css",
                        "~/Content/fullcalendar.print.css"));

            //const string sitecsscdnpath = "http://nttlsrv01/VBAResourceStore/Content/site.css";
            //bundles.Add(new StyleBundle("~/Content/css",sitecsscdnpath).Include("~/Content/bootstrap.css"));

            //6).
            //bundles.Add(new StyleBundle("~/bundles/jqueryuicss").Include(
            //            "~/Content/themes/base/jquery.ui.core.css",
            //            "~/Content/themes/base/jquery.ui.resizable.css",
            //            "~/Content/themes/base/jquery.ui.selectable.css",
            //            "~/Content/themes/base/jquery.ui.accordion.css",
            //            "~/Content/themes/base/jquery.ui.autocomplete.css",
            //            "~/Content/themes/base/jquery.ui.button.css",
            //            "~/Content/themes/base/jquery.ui.dialog.css",
            //            "~/Content/themes/base/jquery.ui.slider.css",
            //            "~/Content/themes/base/jquery.ui.tabs.css",
            //            "~/Content/themes/base/jquery.ui.datepicker.css",
            //            "~/Content/themes/base/jquery.ui.progressbar.css",
            //            "~/Content/themes/base/jquery.ui.theme.css"));
            BundleTable.EnableOptimizations = true;
        }
    }
}