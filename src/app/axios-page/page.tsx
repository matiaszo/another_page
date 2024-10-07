"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import { api } from "@/constants/api";
import { error } from "console";

interface IData {
    albumId: string;
    url: string;
    title: string,
}

const axiosPage = () =>  {

    const [local, setLocal] = useState<IData[]>([]);
    const [message, setMessage] = useState<string>("");
    

    useEffect(() => {
        api.get("photos").then((res) =>{
            const data = res.data
            console.log(data)
            setLocal(data)
        }).catch((error) =>{
            if(error.response.status === 404){
                setMessage("Pagina encontrou nao doidao")
            }
        })

        return () =>{

        }
    },[])


    return(
        <>
            <div className="flex flex-col mt-2">
            <p>something</p>
                {local.map((item, index) =>{
                    return(
                        <div key={index}>
                            <p>--------inicio--------</p>
                            <img src={item.url} alt="imagem" width={200} height={200}/>
                            <p>{item.url}</p>
                            <p>{item.title}</p>
                            <p>{item.albumId}</p>
                            <p>--------final---------</p>
                            <br />

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default axiosPage;