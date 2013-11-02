using System.Web;
using System.Web.Optimization;

namespace RepairKid.com
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery.themepunch.revolution.min.js",
                        "~/Scripts/jquery.themepunch.plugins.min.js",
                        "~/Scripts/jquery.themepunch.touchSwipe.min.js",
                        "~/Scripts/jquery.themepunch.mouseWheel.min.js",
                        "~/Scripts/superfish.js",
                        "~/Scripts/jquery.themepunch.prettyPhoto.js",
                        "~/Scripts/scripts.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquerycarou").Include(
                        "~/Scripts/jquery.carouFredSel-6.2.1-packed.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/themed-bootstrap.css",
                      "~/Content/theme.css",
                      "~/Content/site.css"));
        }
    }
}
