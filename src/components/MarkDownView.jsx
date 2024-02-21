import { Component, createElement } from "react";

import MarkdownView from "react-showdown";
import DOMPurify from 'dompurify';

export class MarkDownText extends Component {
    state = {
        open: false,
        editedvalue: null
    };

    componentDidUpdate(prevProps) {
        // Check if widget has loaded the url data
        console.log(this.props.openBoolean);
        if (this.props.openBoolean && this.props.openBoolean.status === "available") {
            if (prevProps.openBoolean !== this.props.openBoolean && this.props.openBoolean !== this.state.editedvalue) {
                this.setState({ open: this.props.openBoolean.value });
            }
        }
    }

    onDismiss = () => {
        this.setState({ open: false, editedvalue: false });
        this.props.openBoolean.setValue(false);
    };

    sanitizeHtml = html => {
        if (this.props.sanitize) {
            return DOMPurify.sanitize(html);
        } else {
            return html;
        }
    };

    render() {
        return (
            <MarkdownView
                markdown={this.props.markdownInput.value}
                sanitizeHtml={this.sanitizeHtml}
                flavor={this.props.flavor}
                options={{ tables: true, emoji: true, underline: true }}
            />
        );
    }
}
