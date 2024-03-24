import { ListItemsProps } from "../types";

function New(props: ListItemsProps) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    );
}

export default New;
