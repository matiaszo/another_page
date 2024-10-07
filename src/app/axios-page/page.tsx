"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import { api } from "@/constants/api";
import { error } from "console";

interface IData {
    albumId: string;
    thumbnailUrl: string;
    title: string,
}

const axiosPage = () =>  {

    const [local, setLocal] = useState<IData[]>([]);
    const [message, setMessage] = useState<string>("");
    const [photoId, setPhotoId] = useState<string>("");
    

    useEffect(() => {
        api.get(`photos/${photoId}`).then((res) =>{
            const data = res.data
            console.log(data)
            setLocal(Array.isArray(data) ? data : [data])
        }).catch((error) =>{
            if(error.response.status === 404){
                setMessage("Pagina encontrou nao")
            }
        })

        return () =>{

        }
    },[photoId])


    return(
        <>
            <div className="flex flex-col mt-2">
            <p>something</p>
            <input type="text" placeholder="Digite o id" className="text-center" value={photoId} onChange={(event) => setPhotoId(event.target.value)}/>
            <div className="flex flex-wrap items-center justify-center mt-5">
                {local.map((item, index) =>{
                    return(
                        <div key={index} className="flex flex-col w-1/3 items-center justify-center">
                            <img src={item.thumbnailUrl} alt="imagem" width={150} height={150}/>
                            <p>{item.thumbnailUrl}</p>
                            <p>{item.title}</p>
                            <p>{item.albumId}</p>
                            <br />
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default axiosPage;