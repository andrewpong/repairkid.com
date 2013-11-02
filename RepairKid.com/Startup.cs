using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RepairKid.com.Startup))]
namespace RepairKid.com
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
