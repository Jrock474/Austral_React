import "./Home-Header.css"

const Home = () => {
    return(
       <> 
        <div>
            <video autoPlay muted loop className="home-page-animation">
                <source src="Videos\Timeline_1.mp4" type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
        </div>
        </>
    )
}

export default Home;

