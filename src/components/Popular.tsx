import { ListItemsProps } from "../types";

function Popular(props: ListItemsProps) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    );
}

export default Popular;