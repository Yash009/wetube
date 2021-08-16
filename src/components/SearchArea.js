import React, { useState } from "react"

const SearchArea = () => {
    const [keyword, setKeyword] = useState("cricket");
    return (
        <div className="">
            <form>
                <label htmlFor="">
                    Search
                    <input type="text" id="keyword" value = {keyword} onChange ={(e) => setKeyword(e.target.value)}></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchArea