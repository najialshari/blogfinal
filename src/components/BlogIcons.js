import { useMediaQuery } from "react-responsive"

const BlogIcons = ({ post }) => {

    const isPhone = useMediaQuery({ query: '(min-width: 576px)' }) //sm
    // const isTablet = useMediaQuery({query: '(min-width: 768px)'}) //md
    // const isDesktop = useMediaQuery({query: '(min-width: 992px)'}) //lg
    // const isLargeDesktop = useMediaQuery({query: '(min-width: 1200px)'}) //xl
    // const isLargerDesktop = useMediaQuery({query: '(min-width: 1400px)'}) //xxl

    return (
        isPhone ?
            <div className="container d-flex justify-content-center align-items-center" style={{ fontSize: '13px' }}>

                <div>
                    <li className="list-inline-item px-2"><i className="bi bi-eye"></i>&nbsp;&nbsp;{post.views}</li>
                </div>
                <div>/</div>
                <div>
                    <li className="list-inline-item px-2"><i className="bi bi-calendar-event"></i>&nbsp;&nbsp;{post.date}</li>
                </div>

                <div>/</div>
                <div>
                    <li className="list-inline-item ps-2"><i className="bi bi-tags"></i>&nbsp;&nbsp;{post.tags.join(', ')}</li>
                </div >
            </div >
            :
            <div className='text-start' style={{ fontSize: '13px' }}>
                <li><i className="bi bi-eye"></i>&nbsp;&nbsp;{post.views}</li>
                <li><i className="bi bi-calendar-event"></i>&nbsp;&nbsp;{post.date}</li>
                <li><i className="bi bi-tags"></i>&nbsp;&nbsp;{post.tags.join(', ')}</li>
            </div>
    )

}

export default BlogIcons