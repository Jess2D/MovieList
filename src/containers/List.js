import React, { Component } from 'react';
import data from '../assets/data.json';
import Card from '../components/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        }
    }

    async componentDidMount() {
        const movies = data.map((x) => x);
        if (movies.length > 1) {
            this.setState({
                data: movies,
                loading: false,
            });
        }
    }

    render() {
        const { data, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div className='row'>
                {data.map(movie => (
                    <div key={movie.id} className='col-sm-2'>
                        <Card movie={movie} />
                    </div>
                ))}
            </div>
        );
    };

}
export default List