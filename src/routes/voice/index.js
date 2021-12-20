import {h, createContext } from 'preact'
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import Button from '../../components/button'
import LogoImage from '../../assets/images/logo.svg'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import WidgetPreview from '../../assets/images/widget-preview.png'
import WebsiteImage from '../../assets/images/bird-peace.svg'
import MediaPlayerImage from '../../assets/images/social-media.svg'
import EmbedImage from '../../assets/images/dog-bark.svg'
import Confetti from 'react-confetti'

const ConfettiContext = createContext(null);

const features = [
    {
        image: MediaPlayerImage,
        heading: 'Your Voice on your Website',
        list: [
            "Let your visitors hear your voice as soon as they enter your site. A business presentation full of life, a story reaching deep into peoples.", 
            "By combining sound clips of your voice with the content of your pages, you can give your website a more personal, friendly feel. ", 
            
        ]
    },
   
    {
        image: EmbedImage,
        heading: 'Voice as a Marketing tool!',
        list: [
            "Did you know that your voice is one of the most persuasive marketing tools?",
            "Use recorded Voice as a marketing tool to engage and retain visitors, increase sales and product leads, and learn important facts about them."
        ]
    },
    {
        image: WebsiteImage,
        heading: 'Makes visitors stay longer!',
        list: [
            "Connect with your site visitors in a whole new way, and make your website engaging where it wasn't before.",
            "Visitors hear the clip when they view the page, and stay longer on each page when their curiosity is piqued."
        ]
    }
];

function Header({ className, ...extra})  {
    return (
        <div className={`flex ${className}`} {...extra}>
            <img className='md:ml-0 ml-3' src={LogoImage} alt="microrun" />
        </div>
    );
}

function Hero({ className })  {
    return (
        <div className={`flex flex-col md:flex-row ${className}`}>
            <div className={`flex flex-col text-primary font-semibold p-3 md:p-0`}>
                <h1 className='md:text-4xl md:text-left text-2xl text-center'>Give your website a voice, and let your voice be heard.</h1>
                <ul className="text-gray-400 mt-[30px] ml-3 text-lg">
                    <li className='mt-3'>No more boring websites! Now your website can talk.</li>
                    <li className='mt-3'>Increase conversions and lower customer acquisition costs by having the voice of your founder and CEO introduce your product or service and then making it easy and intuitive to get started.</li>
                </ul>
            </div>

            <div className="flex justify-center items-center flex-shrink-0 p-5 m:p-0 md:w-[320px] md:ml-10">
                <img src={WidgetPreview} className='max-w-full max-h-full'/>
            </div>
        </div>
    );
}

// a basic form
const CustomLeadForm = ({ status, message, onValidated }) => {
    let email = useRef(null);
    const { setConfetti } = useContext(ConfettiContext);
    const submit = () => {
        if(email.current && email.current.value.indexOf("@") > -1) onValidated({ EMAIL: email.current.value });
    }

    useEffect(()=> {
        if(status == 'success') {
            setConfetti(true);
            setTimeout(()=> setConfetti(false), 15000);
        }
    }, [status]);
  
    return (
      <div
        className='flex flex-col items-center'
      >
        <div className="flex w-full relative flex-col md:flex-row items-center p-3 md:p-0">
            <input
            className='rounded md:flex-grow px-3 py-1 text-black h-[48px] w-full'
            ref={email}
            type="email"
            placeholder="Enter your email"
            />
            
            <Button className="mt-3 md:mt-0 ml-3 w-[280px] h-[48px]" onClick={submit}>Get early access</Button>
        </div>
        <div className="flex mt-[20px] text-center w-full">
            {status === "sending" && <div className='text-blue-500'>sending...</div>}
            {status === "error" && (
            <div
                className='text-red-500'
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
            {status === "success" && (
            <div
                className='text-primary'
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
        </div>
      </div>
    );
}

function LeadForm({ className = "" })  {
    const url = "https://microrun.us20.list-manage.com/subscribe/post?u=3815400201dc870a23cd0bcec&amp;id=9916d2d662" 

    return (

        <div className={`flex flex-col max-w-md mx-auto text-gray-300 ${className}`}>
            <h3 className='mb-10 text-center text-2xl text-gray-100'>Sign up to the waitlist to be the first to try out Voice and stay in the loop.</h3>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomLeadForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

function FeatureItem({ className = '', image = '', heading = '', reverse = false , list = []}) {
    return (
        <div className={`flex mt-[30px] md:mt-[80px] ${className} ${reverse? 'flex-row-reverse':''}`}>
            <div className="hidden w-[290px] flex-shrink-0 md:flex justify-center items-center">
                <img src={ image } className='max-w-full max-h-full scale-150' />
            </div>

            <div className={`mt-5 md:mt-0 ${reverse?'md:mr-8':'md:ml-8'} flex-grow`}>
                <h3 className='font-semibold text-3xl ml-[10px] text-primary'>{heading}</h3>
                <ol className='text-gray-400 ml-[15px] mt-5'>
                    { list.map((item) => <li className='mt-3 text-lg'>{item}</li>) }
                </ol>
            </div>
    </div>
    );
}

function Feature({ className = '' }) {
    return (
        <div className={`flex flex-col ${className}`}>
            {/* <h1 className='flex flex-col max-w-md mx-auto text-right text-4xl text-gray-300'>Benefits of using Voice</h1> */}
            
            { features.map((item, idx)=> <FeatureItem reverse={idx%2 == 0} {...item} />) }
        </div>
    );
    
}

function Why({ className, img }) {
    return (
        <div className={`flex ${className} flex-col md:flex-row`}>
            <h1 className='flex flex-col max-w-md mx-auto text-right text-4xl text-gray-300'>WHY VOICE?</h1>
            <div className='md:ml-[30px] flex-grow text-lg text-justify mt-5 p-3 md:p-0 md:mt-0'>
            Are your leads are not converting into sales at a satisfying rate ?
            Now with "Voice", Record a voice message, and our simplified controls will let you customize the timing of when and how the voice will be played, so that visitors are more likely to respond and retain. 
            </div> 
            

        </div>
    );

}

function FollowUs(props) {
    return (
        <div className='mt-20 pb-8 text-xl'>
            Follow us on Twitter <a target="_blank" className='text-primary font-semibold' href="https://twitter.com/microrun_in">@microrun_in</a>
        </div>
    );
}

function ShowerEffect() {
    const { confetti, setConfetti } = useContext(ConfettiContext);

    return confetti? <Confetti width={window.innerWidth - 100} height={document.body.scrollHeight} /> : '';
}

export default function LandingPage(){
    const [ confetti, setConfetti ] = useState(false);
    
    return (
        <ConfettiContext.Provider value={{ confetti, setConfetti}}>
            <div className='text-gray-400'>
                <div className="h-screen max-w-4xl mx-auto">
                    <Header className="mt-5"/>
                    <Hero className="mt-[30px] md:mt-[75px]"/>
                    <LeadForm className='mt-[50px] md:mt-[100px]'/>
                    <Why className="mt-[50px] md:mt-[90px] "/>
                    <Feature className="md:mt-[20px] pb-[70px]"/>
                    <FollowUs />
                    <ShowerEffect />
                </div>
            </div>
        </ConfettiContext.Provider>        
    );
}