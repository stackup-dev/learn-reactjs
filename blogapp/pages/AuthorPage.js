import Header from "../components/Header";
 
const AuthorPage = () => {

    return (
        <div>
            <Header />
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">About the Author: Suzaku</h1>
                   
                    <img src="./img/header_author.jpg" className="hero-image" alt="" />
                    <div className="blog-content">
                        <p className="blog-text">Suzaku has always been interested in web development since he was 13 years old. Back then, he started off with Notepad and Dreamweaver to create simple layouts. Since then the technologies behind web development have progressed a fair bit. Today, he enjoys using Tailwind CSS to create beautiful website designs, and React to create web apps. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AuthorPage;
