import React, { Component } from 'react';

class AddFishForm extends Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef();

    createFish = (e) => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            description: this.descriptionRef.value.value,
            image: this.imageRef.value.value
        }
        this.props.addFish(fish);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input ref={this.nameRef} name="name" type="text" placeholder="Name" />
                <input ref={this.priceRef} name="price" type="text" placeholder="Price" />
                <select ref={this.statusRef} name="status">
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
                <textarea ref={this.descriptionRef} name="description" placeholder="Description"></textarea>
                <input ref={this.imageRef} name="image" type="text" placeholder="Image" />
                <button type="submit">+Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;