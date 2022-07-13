import { useMediaQuery } from "react-responsive"

const BlogIcons = ({ post }) => {

    const isPhone = useMediaQuery({ query: '(min-width: 576px)' }) //sm
    // const isTablet = useMediaQuery({query: '(min-width: 768px)'}) //md
    // const isDesktop = useMediaQuery({query: '(min-width: 992px)'}) //lg
    // const isLargeDesktop = useMediaQuery({query: '(min-width: 1200px)'}) //xl
    // const isLargerDesktop = useMediaQuery({query: '(min-width: 1400px)'}) //xxl

    return (
        isPhone ?
            <div className="bg-info d-flex" style={{ fontSize: '13px' }}>

                <div>
                    <li className="list-inline-item"><i className="bi bi-eye"></i>&nbsp;&nbsp;{post.views}&nbsp;</li>
                </div>
                <div>/&nbsp;&nbsp;</div>
                  <div>
                      <li className="list-inline-item"><i className="bi bi-calendar-event"></i>&nbsp;&nbsp;{post.date}&nbsp;</li>
                </div>
                    
                        <div>/&nbsp;&nbsp;</div>
                        <div>
                            <li className="list-inline-item"><i className="bi bi-tags"></i>&nbsp;&nbsp;{post.tags.join(', ')}</li>
                            </div >
            </div >
            :
<div className="text-start" style={{ fontSize: '13px' }}>
    <li><i className="bi bi-eye"></i>&nbsp;&nbsp;{post.views}</li>
    <li><i className="bi bi-calendar-event"></i>&nbsp;&nbsp;{post.date}</li>
    <li><i className="bi bi-tags"></i>&nbsp;&nbsp;{post.tags.join(', ')}</li>
</div>
    )

}

export default BlogIcons