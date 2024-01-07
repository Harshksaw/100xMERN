import PropTypes from 'prop-types';

export default function Header({title}) {
    return (
        <div>
                {title}
            Header
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};
