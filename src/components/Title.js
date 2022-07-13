

const Title = ({titleText}) => {


    return (

        <div className="fluid bg-light">
            <div className="container d-flex align-items-center" style={{ height: '200px' }}>
            <p className="title" >{titleText.replace(/-/g, ' ')}</p>
                    {/* <h1>{slug.split('-').join(' ')}</h1> */}
            </div>
        </div>

    )
}

export default Title