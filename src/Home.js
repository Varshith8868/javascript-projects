// import { useState, useEffect } from "react";

// // BlogList Component
// const BlogList = (props) => {
//     // Destructuring props to get blogs, title, and handleDelete
//     const { blogs, title, handleDelete } = props;

//     return (
//         <div className="blog-list">
//             {/* Display the title of the list */}
//             <h1>{title}</h1>
            
//             {/* Map through the blogs and display each one */}
//             {blogs.map((blog, index) => (
//                 <div className="blog-preview" key={index}>
//                     <h2>{blog.title}</h2>
//                     <p>Written by: {blog.author}</p>
                    
//                     {/* Add a button to delete the blog by author */}
//                     <button onClick={() => handleDelete(blog.author)}>
//                         Delete Blog
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// // Home Component
// const Home = () => {
//     // State for blogs
//     const [blogs, setBlogs] = useState([
//         { 'title': 'Salaar', 'body': 'action movie', 'author': 'Prashanth' },
//         { 'title': 'Kalki', 'body': 'Scifi movie', 'author': 'Nag Ashwin' },
//         { 'title': 'Vikram', 'body': 'action movie', 'author': 'Lokesh' }
//     ]);

//     // Function to handle deleting a blog by its author's name
//     const handleDelete = (author) => {
//         // Filter out the blog where the author's name matches the one being deleted
//         const newBlogs = blogs.filter((blog) => blog.author !== author);
        
//         // Update the blogs state with the filtered list
//         setBlogs(newBlogs);
//     };

//     // State for name and age
//     const [name, setName] = useState('Varshith');
//     const [age, setAge] = useState('20');

//     // Function to update name, age, and show an alert
//     const handleClick = () => {
//         setName('Nikhil');
//         setAge('24');
//         alert("Hello Everyone");
//     };

//     // useEffect hook to run when blogs state changes
//     useEffect(() => {
//         console.log('useEffect ran due to blogs change');
//         console.log(blogs);
//     }, [blogs]);  // Dependency array to trigger effect when blogs change

//     // useEffect hook to run when name state changes
//     useEffect(() => {
//         console.log('useEffect ran due to name change');
//         console.log(name);
//     }, [name]);  // Dependency array to trigger effect when name changes

//     return (
//         <div className="home">
//             {/* Display Name and Age */}
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>

//             {/* Button to trigger handleClick */}
//             <button onClick={handleClick}>Click me</button>

//             {/* Button to change the name to 'Luigi' */}
//             <button onClick={() => setName('Luigi')}>Set Name</button>

//             {/* Pass blogs, title, and handleDelete function to BlogList */}
//             <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
//             {/* Filter blogs to only show those written by 'Nag Ashwin' */}
//             <BlogList blogs={blogs.filter((blog) => blog.author === 'Nag Ashwin')} title="Nag Ashwin's Blogs" handleDelete={handleDelete} />
//         </div>
//     );
// };

// export default Home; // Export the Home component


// import {useState, useEffect} from "react";
// import BlogList from "./BlogList";


// const Home = () => {
    
//     const [name, setName]=useState('Varshith');
//     const [blogs, setBlogs]=useState(null);

//     useEffect(()=>{
//         fetch("http://localhost:8000/blogs")
//         .then(res => {
//             return res.json();
//         })
//         .then(data=>{
//             setBlogs(data);
//         })
//     },[]);

//     const handleDelete=(title)=>{
//         const newBlogs=blogs.filter((blog)=>blog.title!==title);
//         setBlogs(newBlogs);
//         setName('Konala Varshith');
//     }

//     return ( 
//         <div className="home">
//             <h1>{name}</h1>
//             <br></br>
//             {blogs && <BlogList blogs={blogs} title="All Blogs."/>}
//             <br></br>
//             <BlogList blogs={blogs.filter((blog)=>blog.author==="Prashanth")} handleDelete={handleDelete} title="Pranshant's Blogs"></BlogList>
//         </div>
//      );
// }

// export default Home;


import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs]=useState(null);
    useEffect(() => {
    fetch('http://localhost:8000/blogs').then(
        res => {
            return res.json();
        }).then(
         data => {
            setBlogs(data);
         })
         .catch(error => console.log(error)
         )
   },[])
    return ( 

       <div className="home">

       {blogs && <BlogList blogs={blogs} title="All Blogs"/>} 
       </div>

     );
}

export default Home;