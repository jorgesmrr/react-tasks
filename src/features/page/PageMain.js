import { useSelector } from "react-redux";
import NoListHint from "../common/NoListsHint";
import { getListById } from "../list/listSlice";
import TasksList from "../task/TasksList";
import backgroundImage from "./background.jpg";

const PageMain = ({ onMenuIconClick }) => {
    const activeList = useSelector((state) =>
        getListById(state.lists, state.lists.activeListId)
    );

    const content = (activeList || {}).id ? (
        <TasksList listId={activeList.id} />
    ) : (
        <NoListHint />
    );

    return (
        <div className="relative lg:pt-16">
            <img
                src={backgroundImage}
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 opacity-25 bg-neutral-5" />
            <div className="fixed inset-x-0 top-0 z-20 flex items-center h-20 bg-white shadow-lg lg:hidden">
                <i
                    className="mx-8 text-2xl cursor-pointer lg:hidden fas fa-bars hover:text-primary-3"
                    data-testid="drawerIcon"
                    onClick={() => onMenuIconClick()}
                />
                <h1 className="my-0 mr-8 text-4xl">
                    {activeList ? activeList.name : "Tasks"}
                </h1>
            </div>
            <main className="relative z-10 pt-20 mt-8 lg:mt-0 lg:pt-0 content-medium">
                {content}
            </main>
        </div>
    );
};

export default PageMain;
