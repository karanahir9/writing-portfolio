import React from "react";
import {CATEGORY_DETAILS} from "../../data/category.details.data";
import "./categoryDetails.styles.css";

class CategoryDetails extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            title: "Tech",
            image: []
        }
    }

    renderImage(imageUrls) {
        return(
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-back">
                { imageUrls.flipImageUrl.includes(".jpg") ?
            <img alt="flipped" src={imageUrls.flipImageUrl} className="image"/> : 
            <p>{imageUrls.flipImageUrl}</p>
                }
            </div>
             <div className="flip-card-front">
                <img alt="front" src={imageUrls.imageUrl} className="image" />
            </div>
          </div> 
        </div>
        );        
    }

    renderBlogs(showBlogs) {
         return (showBlogs ?
                <h2>Blogs & Brochures</h2> : <br/>);
    }

    renderBlogLinks(blog) {
        return(
            <a href={blog.blogLink} target="_blank" rel="noreferrer">{blog.blogTitle}</a> 
        );
    }

    renderWebsite(showWebsite) {
        return (showWebsite ?
            <h2>Websites</h2> : <br/>);
    }

    renderWebsiteLinks(website) {
        return (
            <a href={website.websiteLink} target="_blank" rel="noreferrer">{website.websiteName}</a>
        );
    }

    static getDerivedStateFromProps( props, state) {
        const { title, image, showBlogs, blogs, showWebsite, website } = CATEGORY_DETAILS[props.activeIndex];    
        return { title,  image, showBlogs, blogs, showWebsite, website}    
    }
    render(){
        return(
            <div className="portfolio-page">
                {this.renderWebsite(this.state.showWebsite)}
            <div className="website-grid">
                {this.state.website.map(website => this.renderWebsiteLinks(website))}
            </div>
                {this.renderBlogs(this.state.showBlogs)}
            <div className="blog-grid">
                {this.state.blogs.map(blog => this.renderBlogLinks(blog))}
            </div>    
            
                <h2>Creatives</h2>
            <div className="image-grid">
                {this.state.image.map(imageUrls => this.renderImage(imageUrls))}
            </div>
            
                
                
            </div>
        );

    }
}

export default CategoryDetails;

