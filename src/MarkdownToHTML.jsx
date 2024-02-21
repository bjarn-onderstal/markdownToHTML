import { Component, createElement } from "react";
import { MarkDownText } from "./components/MarkDownView";

export class MarkdownToHTML extends Component {
    render() {
        return (
            <MarkDownText
                markdownInput={this.props.markdownInput}
                sanitize={this.props.sanitize}
            />
        );
    }
}
