import {useForm} from "./use-form.js";

export function ReviewForm() {
const {name, address, review, setName, setAddress, setReview} = useForm();

    return (
        <form>
            <div>
                <span>
                    name
                </span>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <span>
                    address
                </span>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <span>
                    review
                </span>
                <input type='text' value={review} onChange={(e) => setReview(e.target.value)} />
            </div>
        </form>
    );
};
