import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Products from "../pages/admin/Products/Products";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [{
    path: '/',
    element: <SiteRoot />,
    children: [
        {
            path: '',
            element: <Home />
        }
    ]
},
{
    path: '/admin',
    element: <AdminRoot />,
    children: [
        {
            path: '',
            element: <Products />
        },
        {
            path: 'add',
            element: <Add />
        }
    ]

}
]

export default ROUTES