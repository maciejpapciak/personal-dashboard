import React from "react"

const useChatHeader = () => {

    const [darkMode, setDarkMode] = React.useState(true)


    function changeMode(){
        setDarkMode(prev => !prev)
    }


    return {darkMode, changeMode}
}

export default useChatHeader