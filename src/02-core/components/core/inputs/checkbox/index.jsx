import React from "react";
import PropTypes from "prop-types";

// Material-ui
import MuiCheckbox from "@material-ui/core/Checkbox";

// Style
import "./index.scss";

const propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    // TODO
    //helperText: PropTypes.string,
    //required: PropTypes.bool,
    //error: PropTypes.bool,
    edit: PropTypes.bool
};

const defaultProps = {
    // TODO
    //helperText: undefined,
    //required: false,
    //error: false,
    edit: false
};

function Checkbox({ name, label, value, checked, onChange, edit }) {
    return (
        <div className="c-checkbox">
            <MuiCheckbox
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={!edit}
                classes={{ root: !edit ? "c-checkbox__value-read-mode" : "" }}
            />
            <label className={edit ? "c-checkbox__label-edit-mode" : ""}>
                {label}
            </label>
        </div>
    );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.displayName = "Checkbox";

export default Checkbox;
