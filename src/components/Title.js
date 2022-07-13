

const Title = ({titleText}) => {

    return (

        <div className="fluid bg-light">
            <div className="container d-flex align-items-center" style={{ height: '200px' }}>
            <h1 className="title" >{titleText}</h1>
            {/* <h1 className="title" >{titleText.replace(/-/g, ' ')}</h1> */}
                    {/* <h1>{slug.split('-').join(' ')}</h1> */}
                
            </div>
        </div>

    )
}

export default Title