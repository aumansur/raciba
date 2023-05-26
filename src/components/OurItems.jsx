import React from 'react';
import Marquee from 'react-fast-marquee';

const OurItems = () => {
    return (
        <div>
            <h1 className='text-center  text-4xl font-bold pc '><span className='border-b-2 border-amber-400'>Our Items</span></h1>
            <Marquee className='my-6'>
                <div className='w-80 h-80  bg-slate-700 text-white text-3xl font-bold text-center' style={{ backgroundImage: 'url(http://www.veepixel.com/tf/html/sous/assets/images/home_03_04.jpg)' }}> <h1 className='bgc py-2'>Roasted garlic asparagus</h1> </div>
                <div className='w-80 h-80  bg-slate-700 text-white text-3xl font-bold text-center' style={{ backgroundImage: 'url(http://www.veepixel.com/tf/html/sous/assets/images/home_03_05.jpg)' }}> <h1 className='bgc py-2'>Coconut quinoa power bowls</h1> </div>
                <div className='w-80 h-80  bg-slate-700 text-white text-3xl font-bold text-center' style={{ backgroundImage: 'url(http://www.veepixel.com/tf/html/sous/assets/images/home_03_06.jpg)' }}> <h1 className='bgc py-2'>Incredable workshop by Gordon Ramsay</h1> </div>
                <div className='w-80 h-80  bg-slate-700 text-white text-3xl font-bold text-center' style={{ backgroundImage: 'url(http://www.veepixel.com/tf/html/sous/assets/images/home_03_07.jpg)' }}> <h1 className='bgc py-2'>Spring zucchini pastapasta </h1> </div>
                <div className='w-80 h-80  bg-slate-700 text-white text-3xl font-bold text-center' style={{ backgroundImage: 'url(http://www.veepixel.com/tf/html/sous/assets/images/home_03_08.jpg)' }}> <h1 className='bgc py-2'>Making stuffed artichokes </h1> </div>
                <div className='w-80 h-80  bg-slate-700 text-white text-3xl font-bold text-center' style={{ backgroundImage: 'url(http://www.veepixel.com/tf/html/sous/assets/images/home_03_02.jpg)' }}> <h1 className='bgc py-2'>Making stuffed artichokes </h1> </div>
                <div className='w-80 h-80  bg-slate-700 text-white text-3xl font-bold text-center' style={{ backgroundImage: 'url(http://www.veepixel.com/tf/html/sous/assets/images/home_03_07.jpg)' }}> <h1 className='bgc py-2'>Spring zucchini pastapasta </h1> </div>




            </Marquee>
        </div>
    );
};

export default OurItems;