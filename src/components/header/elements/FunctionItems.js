import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../../common/utils";
import { calculateTotalPrice } from "../../../common/shopUtils";

function FunctionItems({ hideTotal, hideWishlist }) {
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <div className="function-items">
      {!hideWishlist && (
        <Link href="/shop/wishlist" className="function-items-item">
          <i className="icon_heart_alt" />
        </Link>
      )}

      <Link href="/shop/cart">
        <a className="function-items-item">
          <i className="icon_bag_alt" />

          {!hideTotal &&
            (cartState.data ? (
              <span>{formatCurrency(calculateTotalPrice(cartState.data))}</span>
            ) : (
              <span>{formatCurrency(0)}</span>
            ))}
        </a>
      </Link>
    </div>
  );
}

export default React.memo(FunctionItems);
