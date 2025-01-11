// const BlogList = ({blogs, title, handleDelete}) => {
    
//     return (
        
//         <div className="blog-list">
//             <h1>{title}</h1>
//             <button onClick={() => handleDelete("Nag Ashwin")}>Click to Delete </button>

//             {blogs.map((blog) => (
//             <div className="blog-preview">
//                 <h2>{blog.title}</h2>
//                 <p> Written by: {blog.author}</p>

//             </div>

//         ))
//     }
//         </div>
//      );
// }
 
// export default BlogList;

const BlogList = ({blogs, title}) => {
    
    return (
        
        <div className="blog-list">
            <h1>{title}</h1>

            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p> Written by: {blog.author}</p>
            </div>
        ))
    }
        </div>
     );
}
 
export default BlogList;