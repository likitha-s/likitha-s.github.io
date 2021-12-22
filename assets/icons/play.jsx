import {h} from 'preact'

export default (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${props.className || ''} feather feather-play`} width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width={props.width || 1} stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);