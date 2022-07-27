import React, {Component, Fragment} from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post : [],
        formBlogPost : {
            userId: 1,
            id: 1,
            title:'',
            body:''
            },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((result => {
            alert('Data berhasil ditambahkan');
            this.getPostAPI();
            this.resetForm();
            }), (err) => {
                console.log('error : ',err);
            })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((result => {
            alert('Data berhasil diubah');
            this.getPostAPI();
            this.setState({
                isUpdate: false
            });
            this.resetForm();
        }), (err) => {
            console.log('error : ',err);
        })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
            alert('Data berhasil dihapus');
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    resetForm = (event) => {
        this.setState({
            formBlogPost : {
                userId: 1,
                id: 1,
                title:'',
                body:''
                }
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();   
        if(!this.state.isUpdate) { formBlogPostNew['id'] = timestamp; }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        this.state.isUpdate ? this.putDataToAPI() : this.postDataToAPI();
    }
    
    componentDidMount(){
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body"></label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body}  cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;