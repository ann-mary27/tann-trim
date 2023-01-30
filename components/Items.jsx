import styles from '../styles/page.module.css';
import Card from './Card.jsx';
import { HiOutlineArrowUpOnSquare } from 'react-icons/hi2';
import { BsDot } from 'react-icons/bs';

function Items({data
   , metadata
}) {
  console.log(data);
  // const cards=data.products;
  return (
    <>
      <div className="item-info flex flex-row justify-between my-2 sm:m-5" >
        <div className="flex flex-row  mx-0 lg:mx-3">
          <span>{metadata.substring(0, metadata.indexOf('|')-1)}</span>
          <span className="mx-1 sm:mx-3 text-2xl "><BsDot /></span>
          <span>{metadata.substring(metadata.indexOf('|')+2)}</span>
        </div>
        <div className='flex flex-row'>
          <span className='mx-3'>{data.length} products </span>
          <span className="ml-2 lg:ml-4 text-2xl"> <HiOutlineArrowUpOnSquare /></span>
        </div>
      </div>


      {/* <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 overflow-x-hidden '>
          {...data}
        </div> */}
      <div className='items md:m-5 m-0 grid grid-cols-1 sm:grid-cols-2 gap-y-7 lg:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {data.map(card =>
          <Card key={card.id} name={card.name} iurl={card.plpimaage} purl={card.product_url} discount={card.discount} price={card.price}
          sprice={card.special_price}
          />
          )}
      </div>
    </>
  )
}

export default Items


