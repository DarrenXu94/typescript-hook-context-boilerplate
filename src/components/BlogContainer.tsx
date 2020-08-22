import React from 'react'
import Blog from "./Blog";

export default function BlogContainer({ blogItems }) {
    return (
        <div>
            Blog Container
            {blogItems.map(item => <Blog item={item} key={item.key} />)}
        </div>
    )
}
