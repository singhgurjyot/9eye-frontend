import React, {Component} from'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import './Facebook.css'

export default class Facebook extends Component{

    state = {
        isLoggedIn: false,
        provider : 'facebook',
        email : '',
        picture: '',
        accessToken: ''
    };

    responseFacebook = response => {

        this.setState({
            isLoggedIn: true,
            provider : 'facebook',
            accessToken : response.accessToken
        });
    };

    componentClicked = () => console.log('Clicked');

    render(){
        let fbContent;

        let newPost = {
            provider : this.state.provider,
            access_token : this.state.accessToken
        }

        if(this.state.isLoggedIn){
            fbContent = null;
            fetch('https://dfdf8f96390f.ngrok.io/fblogin/', {
                    method:'post',
                    body: JSON.stringify(newPost),
                    headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            }
                }).then(res => res.json())
                    .then(function(data){
                        console.log('the data',data)
                    })
                    .catch(err => {
                        console.log(err);
                        console.log(newPost);
                    });
        }

        else{
            fbContent = (<FacebookLogin
            appId="183748135687899"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            render={renderProps => (
                  <button className="fb_login" onClick={renderProps.onClick}>
                      <svg aria-hidden="true" className="fb_icon" fill="#f8f8f8" width="1rem" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                      &nbsp;&nbsp;&nbsp;Login with Facebook
                  </button>
                )}
             />);
        }

        return(
            <div>
                {fbContent}
            </div>
        )
    }
}
