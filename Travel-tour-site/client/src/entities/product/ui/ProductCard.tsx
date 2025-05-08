import { FC } from 'react';
import { Product } from '../model/types';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  showQuantity?: boolean;
  showDiscount?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  onClick,
  showQuantity = true,
  showDiscount = true,
}) => {
  const { name, description, price, discountPrice, quantity } = product;

  return (
    <div
      onClick={onClick}
    >
      <h2>{name}</h2>
      <p>{description}</p>

      <div>
        {showDiscount && discountPrice ? (
          <div>
            <span>${discountPrice}</span>
            <span>${price}</span>
          </div>
        ) : (
          <span>${price}</span>
        )}
      </div>

      {showQuantity && (
        <p>В наличии: {quantity} шт</p>
      )}
    </div>
  );
};