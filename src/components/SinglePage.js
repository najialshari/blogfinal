import HTMLReactParser from 'html-react-parser'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogIcons from './BlogIcons'
import Comments from './Comments'
import Title from './Title'

const SinglePage = () => {

    const { slug } = useParams()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://www.wp-course.site/wp-json/youthink/post?slug=' + slug)
            .then(responce => responce.json())
            .then(result => setBlogs(result))
            .catch("Error Blogs...")

        // add the next line 'eslint-...' at the end of useEffect to stop dependency warrning 

        // eslint-disable-next-line react-hooks/exhaustive-deps      
    }, [])

    window.scrollTo(0, 0)

    return (

        <>

            {/* if jsx references to useEffect results, use condition to handle case before before finish execution
                or you will get errors says "undefined"  */}

            <Title titleText={blogs.length !== 0 ? HTMLReactParser(blogs.data.title) : null} />

            <div className="blogFrame container mt-5" >

                {blogs.length !== 0 ?
                    <div className="col-md-8 col-12 me-3" >

                        <div className="card border-0 me-2">
                            <img src={blogs.data.thumbnail} className="card-image-top " alt='...' />
                            <div className="card-body p-0 mt-4">

                                <div className='bg-light d-flex justify-content-between align-items-center'>

                                    <div className='d-flex ps-2'>
                                        <div ><i className="bi bi-person"></i>&nbsp;&nbsp;</div>
                                        <div className="fw-bold">{blogs.data.author}</div>
                                    </div>

                                    <div><BlogIcons post={blogs.data} /></div>

                                </div>

                                <div className="parser card-text me-3 my-4">
                                    {HTMLReactParser(blogs.data.content)}
                                </div>

                            </div>
                        </div>

                    </div>
                    :
                    <div className="col text-center text-primary">
                        <div className="spinner-border" role='status'></div>
                    </div>}

                <Comments />

            </div>
        </>)
}
export default SinglePage