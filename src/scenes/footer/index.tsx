import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div
            className="justify-content mx-auto w-5/6 gap-16 md:flex"
        >
            <div
                className="mt-16 basis-1/2 md:mt-0"
            >
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,    
                </p>
                <p>Evogym all rights reserved.</p>
            </div>
            <div
                className="mt-16 basis-1/4 md:mt-0"
            >
                <h4 className="font-bold">Links</h4>
            </div>
            <div></div>
        </div>
    </footer>
  )
}

export default Footer