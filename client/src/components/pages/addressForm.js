"use strict"
import React from 'react';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postAddresses,getAddress, updateAddresses} from '../../actions/adressesActions';


class AddressForm extends React.Component{

    componentWillReceiveProps(nextProps) {
        //update
        if(nextProps.address) {
            findDOMNode(this.refs.title).value = nextProps.address.title
            findDOMNode(this.refs.name).value = nextProps.address.name
            findDOMNode(this.refs.line1).value = nextProps.address.line1
            findDOMNode(this.refs.line2).value = nextProps.address.line2
            findDOMNode(this.refs.town).value = nextProps.address.town
            findDOMNode(this.refs.country).value = nextProps.address.country
            findDOMNode(this.refs.postcode).value = nextProps.address.postcode
            findDOMNode(this.refs.phone).value = nextProps.address.phone
        }
    }

    handleSubmit(){
        const address={
            title: findDOMNode(this.refs.title).value,
            name: findDOMNode(this.refs.name).value,
            line1: findDOMNode(this.refs.line1).value,
            line2: findDOMNode(this.refs.line2).value,
            town: findDOMNode(this.refs.town).value,
            country: findDOMNode(this.refs.country).value,
            postcode: findDOMNode(this.refs.postcode).value,
            phone: findDOMNode(this.refs.phone).value,

        }
        if(this.props.address){
            address.id = this.props.address.id
            this.props.updateAddresses(address);
        }else{
            this.props.postAddresses(address);
        }
    }

    handleValidation(field){
        return this.props && this.props.validation  && this.props.validation.length && this.props.validation[field] ? 'error' : null
    }

    render(){
        var validationTag = '';
        if(this.props.validation && this.props.validation.length) {
            const validationError = this.props.validation.map(function (err, index) {
                return (
                    <li key={index}>{err.field} : {err.message}</li>
                )
            });
            validationTag = (<Panel bsStyle="danger" header="Validation error"><ul>{ validationError }</ul></Panel>)
        }
        return(
            <Well>
                { validationTag }
                <Panel>
                    <FormGroup controlId="title" validationState={ this.handleValidation(0)}>
                        <ControlLabel>* Title</ControlLabel>
                        <FormControl type="text" ref="title" placeholder="* Enter Title"
                                     defaultValue={this.props.address && this.props.address.title? this.props.address.title : '' }
                        />
                    </FormGroup>
                    <FormGroup controlId="name" validationState={ this.handleValidation(1) } >
                        <ControlLabel>* full name</ControlLabel>
                        <FormControl type="text" ref="name" placeholder="* full name" defaultValue={this.props.address && this.props.address.name? this.props.address.name : '' } />
                    </FormGroup>
                    <FormGroup controlId="line1" validationState={ this.handleValidation(2) } >
                        <ControlLabel>Address line 1</ControlLabel>
                        <FormControl type="text" ref="line1" placeholder="* address line 1" defaultValue={this.props.address && this.props.address.line1? this.props.address.line1 : '' } />
                    </FormGroup>
                    <FormGroup controlId="line1">
                        <ControlLabel>Address line 2</ControlLabel>
                        <FormControl type="text" ref="line2" placeholder="address line 2" defaultValue={this.props.address && this.props.address.line2? this.props.address.line2 : '' } />
                    </FormGroup>
                    <FormGroup controlId="town" validationState={ this.handleValidation(3) }  >
                        <ControlLabel>* Towm/City</ControlLabel>
                        <FormControl type="town" ref="town" placeholder="* town" defaultValue={this.props.address && this.props.address.town? this.props.address.town : '' } />
                    </FormGroup>
                    <FormGroup controlId="country">
                        <ControlLabel>Country</ControlLabel>
                        <FormControl type="country" ref="country" placeholder="country" defaultValue={this.props.address && this.props.address.country? this.props.address.country : '' }  />
                    </FormGroup>
                    <FormGroup controlId="postcode" validationState={ this.handleValidation(4) }>
                        <ControlLabel>* postcode</ControlLabel>
                        <FormControl type="postcode" ref="postcode" placeholder="postcode" defaultValue={this.props.address && this.props.address.postcode? this.props.address.postcode : '' }  />
                    </FormGroup>
                    <FormGroup controlId="phone" validationState={ this.handleValidation(5) }>
                        <ControlLabel>* phone</ControlLabel>
                        <FormControl type="phone" ref="phone" placeholder="* phone"  defaultValue={this.props.address && this.props.address.phone ? this.props.address.phone : '' } />
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary" >{this.props.address ?  'Update Address':'Add Address'}</Button>
                </Panel>
            </Well>
        )
    }
}
function mapStateToProps(state){
    return{
        addresses: state.addresses.addresses,
        validation: state.addresses.validation,
        address: state.addresses.address
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
            postAddresses:postAddresses,
            getAddress:getAddress,
            updateAddresses:updateAddresses
        }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(AddressForm)
