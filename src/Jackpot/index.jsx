import React from 'react';
import './jackpot.scss';

const range = 200;

function Jackpot({
    text = 'jackpot',
    durationInSeconds = 5,
    itemHeight = 140,
    itemWidth = 80,
}) {
    const [animationY, setAnimationY] = React.useState((range)*itemHeight);

    React.useEffect(() => {
        setAnimationY((range/2)*itemHeight);
    }, []);

    const reapeatItem = (item, qty = range) => {
        const items = [];
        for(let i = 0; i < qty; i++) {
            items.push(item);
        }
        return items;
    }

    return (
        <div className="jackpot">
            {text.split('').map((item, index, arr) => (
                <div
                    className="jackpot__item"
                    style={{ height: `${itemHeight}px`, width: `${itemWidth}px`}}
                    key={`jackpot__item__${index}`}
                >
                    <div
                        className="jackpot__item-animate"
                        style={{
                            transition: `all ${(durationInSeconds/arr.length)*index+1}s`,
                            transform: `translate(0px, -${animationY}px)`,
                            height: `${itemHeight}px`
                        }}
                    > 
                        {reapeatItem(item, range).map((newItem, i) => (
                            <div
                                className="jackpot__item-inner"
                                key={`jackpot__item__${index}-${i}`}
                                style={{ height: `${itemHeight}px`, lineHeight: `${itemHeight}px` }}
                            >
                                {newItem}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="jackpot__trigger" style={{ top: `${((itemHeight/2)-20)}px`}}>
                <div className="arm">
                    <div className="knob" />
                </div>
                <div className="arm-shadow" />
                <div className="ring1">
                    <div className="shadow" />
                </div>
                <div className="ring2">
                    <div className="shadow" />
                </div>
            </div>
        </div>
    )
}

export default Jackpot;
