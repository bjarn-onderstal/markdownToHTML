import { Component, createElement } from "react";
import { MarkDownText } from "./components/MarkDownView";

import "./ui/MarkdownToHTML.css";

export class MarkdownToHTML extends Component  {

    render(){
        return (
            <MarkDownText 
            markdownInput={this.props.markdownInput}
            sanitize={this.props.sanitize}
            flavor={this.props.flavor}
            />
        )
    }
}
