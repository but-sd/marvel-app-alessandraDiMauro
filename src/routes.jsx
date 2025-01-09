import { path } from "d3";
import { DEFAULT_ORDER, DEFAULT_ORDERBY, getCharacterById, getCharacters } from "./api/characters-api";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";
import CompareCharactersPage from "./pages/CompareCharactersPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { 
                path: "/", 
                element: <CharactersPage />,
                loader : ({request}) => {
                    // Get the sort and order query parameters from the URL
                    const url = new URL(request.url);
                    const searchParams = url.searchParams;

                    const orderBy = searchParams.get("orderBy") || DEFAULT_ORDERBY
                    const order = searchParams.get("order") || DEFAULT_ORDER

                    console.log(`orderBy: ${orderBy}, order: ${order}`);

                    return getCharacters(orderBy, order);
                }
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharacterById(params.id),
            },
            { 
                path: "/compare", 
                element: <CompareCharactersPage />, 
                loader: () => getCharacters(),
            },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
];

export default routes;