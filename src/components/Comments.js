import HTMLReactParser from "html-react-parser"
import { useEffect, useState } from "react"

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://www.wp-course.site/wp-json/wp/v2/comments')
            .then(responce => responce.json())
            .then(result => {
                setComments(result)

            })
            .catch("Error Comments...")

        // add the next line 'eslint-...' at the end of useEffect to stop dependency warrning 

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <>

            {/* if jsx references to useEffect results, use condition to handle case before before finish execution
                or you will get errors says "undefined"  */}

            {comments.length !== 0 ?
                <div className="comments col-md-4 col-12" >
                    <h4 className="mb-4">Latest Comments</h4>
                    {comments.map((comment, index) => (

                        <div className="mt-2 d-flex align-items-start" key={index}>
                            <div className="me-2">
                                <img src={comment.author_avatar_urls[24]} className="rounded-circle" alt='...' />
                            </div>
                            <div>
                                <li>{comment.author_name}</li>
                                <label>{HTMLReactParser(comment.content.rendered)}</label>
                            </div>
                        </div>
                    )
                    )}
                </div>
                : <div className="col-4 text-center p-5 text-primary">
                    <div className="spinner-border" role='status'></div>
                </div>
            }

        </>
    )
}
export default Comments