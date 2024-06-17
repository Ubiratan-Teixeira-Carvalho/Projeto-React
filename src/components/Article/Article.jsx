import React from 'react';



import "./styles.css";

export class Article extends React.Component{
    render(){
        return(
            <article id='article'>
                <img src={this.props.thumbnail} alt="" />


                <div className='article-infos'>
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam possimus aut atque porro odio eligendi numquam itaque repudiandae ipsum libero, tenetur, reiciendis fuga temporibus adipisci quas quos dolorum perferendis!
                    </p>
                </div>
            </article>
        );
    }
}

export default Article;