import { ClassType, SelectedPage } from '@/shared/types'
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'
import Class from './Class'


const classes: Array<ClassType>=[
    {
        name:"Weight Training Classes",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden",
        image:image3
    },
    {
        name:"Yoga Classes",
        image:image4
    },
    {
        name:"Ab core Classes",
        image:image5
    },
    {
        name:"Adventure Classes",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden",
        image:image6
    },
    {
        name:"Fitness Classes",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden",
        image:image3
    },
    {
        name:"Training Classes",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden",
        image:image5
    },
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section
        id='ourclasses' 
        className='w-full bg-primary-100 py-40'
    >
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{ duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <div className='md:w-3/5'>
                    <Htext>OUR CLASSES</Htext>
                    <p className='py-5'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                    </p>
                </div>
                
            </motion.div>
            <div
                className='mt-10 h-[355px] w-full overflow-x-auto overflow-y-hidden'
            >
                <ul
                    className='w-[28000px] whitespace-nowrap'
                >
                    {
                        classes.map((item:ClassType,index)=>(
                            <Class   
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))
                    }
                </ul>
            </div>
        </motion.div>

    </section>
  )
}

export default OurClasses