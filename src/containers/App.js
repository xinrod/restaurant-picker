import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Container from '../components/Container';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
            searchfield: '',
        }
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/xinrod/rpicker-server/restaurants')
        .then(response => response.json())
        .then(restaurants => this.setState({restaurants: restaurants}));
        //fetch('http://jsonplaceholder.typicode.com/users')
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    addRestaurantName = (name, dd,ue,p,gh) => {
        //let restaurant = [name, prices[0], prices[1], prices[2], prices[3]];
        if (dd === "") {
            dd = "N/A";
        }
        if (ue === "") {
            ue = "N/A";
        }
        if (p === "") {
            p = "N/A";
        }
        if (gh === "") {
            gh = "N/A";
        }
        fetch('https://my-json-server.typicode.com/xinrod/rpicker-server/restaurants', {
            method: 'POST',
            body: JSON.stringify({
            name: name,
            doordash: dd,
            ubereats: ue,
            postmates: p,
            grubhub: gh
        }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(restaurant => {
            restaurant.id = this.state.restaurants.length + 1;
            let restaurantsUpdate = this.state.restaurants;
            let found = false
            for (let i = 0; i < restaurantsUpdate.length; i++) {
                if (restaurantsUpdate[i].name.toLowerCase().trim() === restaurant.name.toLowerCase().trim()) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                restaurantsUpdate.push(restaurant);
            }
            this.setState({restaurants: restaurantsUpdate});
        })
        //TODO: Set-up real rest api
        // fetch('https://my-json-server.typicode.com/xinrod/rpicker-server/restaurants')
        // .then(response => response.json())
        // .then(restaurants => this.setState({restaurants: restaurants}));
    }
    
    onSubmit = (event) => {
        event.preventDefault(event);
        this.addRestaurantName(event.target.name.value, 
                            event.target.doordash.value, 
                            event.target.ubereats.value, 
                            event.target.postmates.value, 
                            event.target.grubhub.value);
    };
    render() {
        // const filteredRestaurants = this.state.restaurants;
        const filteredRestaurants = this.state.restaurants.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        if (this.state.restaurants.length === 0) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className='tc'>
                    <h1>Delivery Picker</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Container triggerText={'Add a Restaurant'} onSubmit={this.onSubmit} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList restaurants={filteredRestaurants} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;