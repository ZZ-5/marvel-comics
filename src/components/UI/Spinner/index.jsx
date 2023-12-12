import './index.scss';
import BeatLoader from "react-spinners/BeatLoader";

export const Spinner = () => {
    return (
        <div className='spinner'>
            <BeatLoader color="#fff" loading={true} size={10} speedMultiplier={0.6}
                margin={14} />
        </div>
    )
}

