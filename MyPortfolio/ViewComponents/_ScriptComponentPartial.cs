using Microsoft.AspNetCore.Mvc;

namespace MyPortfolio.ViewComponents
{
    public class _ScriptComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke() { return View(); }
    }
}
