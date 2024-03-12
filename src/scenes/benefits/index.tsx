import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import {HomeModernIcon,UserGroupIcon,AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


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

            {/* Graphics and description */}
            <div className="mt-16 justify-between items-center gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* Description */}
                <div>
                    {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once:true, amount:0.5}}
                                    transition={{ duration:0.5}}
                                    variants={{
                                        hidden:{opacity:0, x:50},
                                        visible:{opacity:1, x:0}
                                    }}
                                >
                                    <Htext>
                                        MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                        <span className="text-primary-500">FIT</span>
                                    </Htext>
                                </motion.div>
                            </div>

                        </div>

                    {/* description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true, amount:0.5}}
                            transition={{delay:0.2, duration:0.5}}
                            variants={{
                                hidden:{opacity:0, x:50},
                                visible:{opacity:1, x:0}
                            }}
                        >
                            <p className="my-5">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage
                            </p>
                            <p className="mb-5">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                            </p>
                        </motion.div>

                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>

    </section>
  )
}

export default Benefits