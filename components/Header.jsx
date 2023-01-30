import Image from 'next/image';
import { HiOutlineMagnifyingGlass, HiOutlineUser, HiOutlineBookmark, HiOutlineShoppingBag } from 'react-icons/hi2';
import styles from '../styles/page.module.css';
import localFont from '@next/font/local';

const myFont = localFont({ src: './Comme-Thin-webfont.woff' })

function Header() {
    const pngPaths = [{
        name: 'All Bags',
        path: '/Bag-Icons/all-bags.png'
    }, {
        name: 'Vanity Pouch',
        path: '/Bag-Icons/vanity-pouch.png'
    }, {
        name: 'Tote Bags',
        path: '/Bag-Icons/tote-bag.png'
    },
    {
        name: 'Duffle Bag',
        path: '/Bag-Icons/duffle-bag.png'
    },
    {
        name: 'Laptop Sleeve',
        path: '/Bag-Icons/laptop-sleeve.png'
    },
    {
        name: 'Messenger Bags',
        path: '/Bag-Icons/messenger-bags.png'
    },

    {
        name: 'Slings Bags',
        path: '/Bag-Icons/slings-bags.png'
    },
    {
        name: 'Handbags',
        path: '/Bag-Icons/handbags.png'
    },
    {
        name: 'Bucket Bag',
        path: '/Bag-Icons/bucket-bag.png'
    }
    ];
    return (
        <div className={styles.header}>
            <div className={styles.hrow1}>
                <div>
                    <p className={myFont.className}>TANN TRIM</p>
                </div>
                <div className={styles.hicons}>
                    <HiOutlineMagnifyingGlass />
                    <HiOutlineUser />
                    <HiOutlineBookmark />
                    <HiOutlineShoppingBag />
                </div>
            </div>
            <div className={styles.hrow2}>
                <span>Bags</span>
                <span>Travel</span>
                <span>Accessories</span>
                <span>Gifting</span>
                <span>Jewelery</span>
            </div>
            {/* <div className={styles.hrow3}> */}
            <div className="flex flex-row w-full h-full overflow-y-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {pngPaths.map(item =>
                    <div key={item.name} className={styles.row3item}>
                        <Image className="self-center" src={item.path} height={60} width={55} alt={item.name} />
                        <span className='self-center'>{item.name}</span>
                    </div>
                )}
            </div>

        </div>
        // </div>
    )
}

export default Header
