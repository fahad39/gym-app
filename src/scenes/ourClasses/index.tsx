import { SelectedPage } from '@/shared/types'
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'


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
        </motion.div>

    </section>
  )
}

export default OurClasses