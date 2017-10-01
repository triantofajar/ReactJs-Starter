import React, { Component } from 'react'
class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            umur:23,
            alamat:'duren tiga'
        };
        console.log('ini constructer')
    }
    componentWillMount(){
        console.log('compnent will mount')
    }
    ubahumur(){
        this.setState({
            umur:25
        })
    }
  render() {
    return (
      <div>
            <h1>Hai Nama saya {this.props.nama}</h1>
            <p>Umur saya {this.state.umur}</p>
            <p>alamat {this.state.alamat}</p>
            <button onClick={ () => this.ubahumur()}>Ubah Umur</button>
    </div>

    )
  }
}

export default Detail;
