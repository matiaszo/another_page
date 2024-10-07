import { ROUTES } from "@/constants/routes";
import Link from "next/link";


export const Menu = () => {

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

