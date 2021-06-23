import PageSidebarFooter from "./PageSidebarFooter";
import ListsList from "../list/ListsList";

const PageSidebar = () => (
    <aside className="flex flex-col px-4 py-4 overflow-auto bg-white sm:px-8 lg:pt-16 lg:shadow-lg">
        <h2 className="h1 mt-0 mb-6">Lists</h2>
        <ListsList />
        <div className="mt-auto">
            <hr className="my-3 border-neutral-3" />
            <PageSidebarFooter />
        </div>
    </aside>
);

export default PageSidebar;
