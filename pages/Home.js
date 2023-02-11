import { useEffect, useState } from "react"

export default function Home({passName}) {
    const [name, setName] = useState();

useEffect(() => {
    setName("bob")
},[name])

    return(
        <>Welcome to the home page {passName}</>
    )
}