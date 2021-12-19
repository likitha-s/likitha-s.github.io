import {h} from 'preact'

export default function Button({ 
    varient = "fill",
    size="md",
    children,
    className='',
    ...extra
}) {

    let varients = {
        border: 'border-2 border-primary text-primary',
        fill: 'bg-primary text-white'
    };

    let sizes = {
        md: 'px-5 py-2 text-md'
    };

    return (
        <button className={`${varients[varient]} ${sizes[size]} ${className} active:scale-95 hover:shadow-md rounded`} {...extra}>
            {children}
        </button>
    );
}