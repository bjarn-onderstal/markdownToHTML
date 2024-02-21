import { Component, createElement } from "react";

import MarkdownView from "react-showdown";
import DOMPurify from "dompurify";

export class MarkDownText extends Component {
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
