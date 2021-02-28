import React, { FC } from "react";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";

interface TabsProps {
    showModal: boolean;
    setShowModal: SetShowModal;
    handleAddNewTask: HandleAddNewTask;
}

const Tabs: FC<TabsProps> = (props) => {
    const { setShowModal, showModal, handleAddNewTask } = props;

    const [openTab, setOpenTab] = React.useState(1);
    const active = "text-ribbonBlue bg-white text-blue-dark";
    const deActive = "text-gray-400 bg-gray-100";

    return (
        <>
            <ul className="flex border-b h-11 list-reset">
                <li
                    className={`mr-1 -mb-px  whitespace-nowrap text-sm sm:text-base border-t border-l border-r rounded-t cursor-pointer
                        ${openTab === 1 ? active : deActive}`}
                >
                    <Link
                        to="/"
                        className={
                            "inline-block px-4 py-2 font-semibold bg-white " +
                            (openTab === 1 ? active : deActive)
                        }
                        onClick={() => {
                            setOpenTab(1);
                        }}
                    >
                        ToDo
                    </Link>
                </li>
                <li
                    className={`mr-1  whitespace-nowrap text-sm sm:text-base -mb-px border-t border-l border-r rounded-t cursor-pointer
                        ${openTab === 2 ? active : deActive}`}
                >
                    <Link
                        to="/donetasks"
                        className={
                            "inline-block px-4 py-2 font-semibold bg-white" +
                            (openTab === 2 ? active : deActive)
                        }
                        onClick={() => {
                            setOpenTab(2);
                        }}
                    >
                        Done Tasks
                    </Link>
                </li>
                <li className="flex ml-auto ">
                    <AddTask
                        setShowModal={setShowModal}
                        showModal={showModal}
                        handleAddNewTask={handleAddNewTask}
                    />
                </li>
            </ul>
        </>
    );
};

export default Tabs;
