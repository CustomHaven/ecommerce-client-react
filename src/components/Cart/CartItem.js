import React from 'react'

function CartItem({item, value}) {
    // const { id, title, img, price, total, count } = props.item;
    // const { increment, decrement, removeItem } = props.value;
    // console.log(item?.id)
    return (
        <div className="row my-5 text-capitalize text-center">
            {item?.img === undefined|| item?.img === null || item?.img?.length === 0 ? null
            : <>
            
            <div className="col-10 mx-auto col-lg-2">
                <img src={item?.img} alt="cart-item" style={{ width: '5rem', height: '5rem' }} className='img-fluid' />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span>
                {item?.title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                {item?.price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => value?.decrement(item?.id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{item?.count}</span>
                        <span className="btn btn-black mx-1" onClick={() => value?.increment(item?.id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => value?.removeItem(item?.id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {item?.total}</strong>
            </div>
            </>}
        </div>
    )
}

export default CartItem
