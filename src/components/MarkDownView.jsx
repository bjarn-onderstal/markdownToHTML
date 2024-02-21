import { Component } from "react";

import MarkdownView from "react-showdown";

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

    render() {
        var markdown = this.props.markdownInput.value;

        return <MarkdownView markdown={markdown} options={{ tables: true, emoji: true }} />;
    }
}
