import { type Product } from '../pages/Products';

type ProductCardProps = {
  item: Product;
};

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className='hover:scale-110'>
      <img src={item.img} alt={item.title} />
      <div>{item.choice && 'Conscious choice'}</div>
      <div>{item.title}</div>
      <div>₩{item.price}</div>
      <div>{item.new && '신제품'}</div>
    </div>
  );
}
