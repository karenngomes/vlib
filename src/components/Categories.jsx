import React, { Component } from 'react';
import axios from 'axios';


export default class Categories extends Component {

    state = {
        category: []
    }
    
    componentDidMount() {
        axios.get(`https://vlibrary.herokuapp.com/v1/category`)
        .then(res => {
            console.log(res.data);
            this.setState({ category: res.data });
        })
    }
    render() {
        return (
            <div>
            
            </div>
        )
    }
    /*
    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=calculo`)
        .then(res => {
            console.log(this.state.search);
            this.setState({ search: res.data.items });
        })
    }
    
    render () {
        return (
        <div>
          categorias
          {console.log(this.state.search)}
            <ul style={{ display:'flex' }}>
                { this.state.search.map((item, index) => (
                    <div id={index} key={index}>
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title}></img>
                    </div>
                ))}
            </ul>
        </div>
        );
    }
*/
    
}
