import HTMLReactParser from "html-react-parser"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Comments from "./Comments"
import Title from "./Title"
import BlogIcons from "./BlogIcons"

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    const [loadNew, setLoadNew] = useState(false)
    const [haveMore, setHaveMore] = useState('')
    const [pageNumber, setPageNumber] = useState(1)


    useEffect(() => {
        fetch('https://www.wp-course.site/wp-json/youthink/posts?page=' + pageNumber)
            .then(responce => responce.json())
            .then(result => {
                result.meta.current_page * result.meta.posts_per_page
                    < result.meta.total_posts ? setHaveMore('visible') : setHaveMore('hidden')
                setBlogs(blogs.concat(result))
                setLoadNew(false)
            })
            .catch("Error Blogs...")

        // add the next line 'eslint-...' at the end of useEffect to stop dependency warrning 

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber])

    return (

        <>

            <Title titleText={'Our Latest Posts'} />

            <div className="blogFrame container mt-5" >

                {/* if jsx references to useEffect results, use condition to handle case before before finish execution
                or you will get errors says "undefined"  */}

                {blogs.length !== 0 ?
                    <div className="col-md-8 col-12 me-3" >
                        {blogs.map((blog) => (
                            blog.data.map((post, index) => (

                                <div className="card border-0 me-2" key={index}>
                                    <img src={post.thumbnail} className="card-image-top rounded-top" alt='...' />

                                    <div className="card-body text-center rounded-top mycard">

                                        <Link to={`/blog/${post.slug}`} className="nav-link card-title">
                                            <h3 className="fw-bold py-sm-2 px-sm-3 px-md-2">{HTMLReactParser(post.title)}</h3>
                                        </Link>
                                        <p className="card-text">{HTMLReactParser(post.excerpt)}</p>

                                        <BlogIcons post={post} />


                                    </div>
                                </div>
                            )
                            )))}
                        {loadNew && <div className="m-auto text-center p-3 text-primary">
                            <div className="spinner-border" role='status'></div>
                        </div>}
                        <div className="d-flex ">

                            <button className='btn btn-primary mb-5 mx-auto' style={{ visibility: haveMore }}
                                onClick={(e) => {
                                    setPageNumber(pageNumber + 1)
                                    setLoadNew(true)
                                    e.target.blur()
                                }
                                }>Load More</button>
                        </div>
                    </div>

                    : <div className="col text-center p-5 text-primary">
                        <div className="spinner-border" role='status'></div>
                    </div>}

                <Comments />

            </div>
        </>
    )


}

export default Blog