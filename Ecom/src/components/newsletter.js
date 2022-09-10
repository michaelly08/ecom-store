const Newsletter = () => {
    return(
        <div className="newsletter-container">
            <div className="newsletter-wrapper">
                <div className="newsletter-info">Get updates from your favourite products.</div>
                <form className="newsletter-form" onSubmit={(e) => {
                    e.target.reset() 
                    e.preventDefault()}}>
                    <input type="email" name="email" placeholder="Email" required></input>
                    <button type="submit" className="btn btn-primary"><i className='bx bxs-paper-plane' ></i></button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;