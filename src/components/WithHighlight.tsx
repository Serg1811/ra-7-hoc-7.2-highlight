import { FC } from 'react';
import New from './New';
import Popular from './Popular';
import { ListItemsProps } from '../types';

function WithHighlight(Component: FC<ListItemsProps>) {
    return function (props: ListItemsProps) {
        if (props.views > 1000) {
            return (
                <Popular type={''} views={0}>
                    <Component {...props} />
                </Popular>
            );
        }

        if (props.views < 100) {
            return (
                <New type={''} views={0}>
                    <Component {...props} />
                </New>
            );
        }

        return <Component {...props} />;
    };
}

export default WithHighlight;
