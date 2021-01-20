import React, { useState } from 'react'


const LikeButton = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Like</button>
            <div>Likes: {count}</div>
        </div> 
    )

}

export default LikeButton