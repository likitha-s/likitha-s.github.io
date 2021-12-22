import {h} from 'preact'
export default (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width={props.width || 1} stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
);