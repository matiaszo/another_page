import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";


const Menu = () => {

    const style = {
        options: "bg-white rounded-[10px] h-[4vh]"
    }

    return(
        <>
            <h1 className="flex flex-col">
                <Link className={style.options} href={ROUTES.home}>Home</Link>
                <Link className={style.options} href={ROUTES.api}>Api</Link>
            </h1>
        </>
    )
}
export default Menu

