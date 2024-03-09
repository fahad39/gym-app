import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import {HomeModernIcon,UserGroupIcon,AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"


type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const benefits:Array<BenefitType>=[
    {
        icon:<HomeModernIcon className="h-6 w-6" />,
        title:"State of the Art Facilities",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        icon:<UserGroupIcon className="h-6 w-6" />,
        title:"100's of Diverse Classes",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6" />,
        title:"Expert and Pro Trainers",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
]

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
        >
            {/* header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{ duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                }}
            >
                <Htext>MORE THAN JUST GYM.</Htext>
                <p className="my-5 text-sm">
                    We provide world class equipment, trainers and classes to
                    get you to your ultimate goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>


            {/* benefits */}
            <motion.div 
                className="mt-5 md:flex items-center justify-between gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                variants={container}
            >
                {benefits.map((benefit:BenefitType)=>(
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Benefits