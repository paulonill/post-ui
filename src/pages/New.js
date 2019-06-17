import React, { Component } from 'react';
import api from '../services/api';

import './New.css';

class New extends Component {

    state = {
        imagem: null,
        autor: '',
        descricao: '',
        local: '',
        hashtags: ''
    };

    handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        data.append('imagem', this.state.imagem);
        data.append('autor', this.state.autor);
        data.append('local', this.state.local);
        data.append('descricao', this.state.descricao);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data);

        this.props.history.push('/');
    }

    handleImagemChange = e => {
        this.setState({imagem: e.target.files[0]});
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
           <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImagemChange}  />
                <input type="text" name="autor" placeholder="Digite o autor do post."
                    onChange={this.handleChange} 
                    value={this.state.autor} />
                <input type="text" name="local" placeholder="Digite o local do post."
                    onChange={this.handleChange} 
                    value={this.state.local} />
                <input type="text" name="descricao" placeholder="Digite a descrição do post."
                    onChange={this.handleChange} 
                    value={this.state.descricao} />
                <input type="text" name="hashtags" placeholder="Digite a hashtags do post."
                    onChange={this.handleChange} 
                    value={this.state.hashtags} />

                <button type="submit">Enviar</button>
           </form>
        );
    }
}

export default New;