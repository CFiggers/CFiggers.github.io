import React, { Component } from 'react'

export default class ShareButton extends Component {
    render () {
        return (
            <div>
                <p onClick={() =>  navigator.clipboard.writeText("This isn't working")}>
                  🔗
                </p>
            </div>
        )
    }
}