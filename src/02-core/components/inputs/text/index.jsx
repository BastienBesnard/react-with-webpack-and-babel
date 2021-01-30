import React from "react";
import PropTypes from "prop-types";

// Material-ui
import TextField from "@material-ui/core/TextField";

// Style
import "./index.scss";

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    edit: PropTypes.bool
};

const defaultProps = {
    value: "",
    onChange: () => {},
    error: false
};

const defaultReadValue = "-";

function Text({ label, value, onChange, error, edit }) {
    return (
        <div className="c-text">
            <TextField
                label={label}
                value={edit ? value : edit || defaultReadValue}
                onChange={(event) => onChange(event.target.value)}
                error={error}
                InputProps={{
                    disabled: !edit,
                    disableUnderline: !edit
                }}
                InputLabelProps={{
                    classes: { root: !edit ? "c-text__read-mode" : "" }
                }}
            />
        </div>
    );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
Text.displayName = "Text";

export default Text;