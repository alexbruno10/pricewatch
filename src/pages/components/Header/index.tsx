import Logo from '../../../assets/Logo.svg'

export default function Header() {
    return(
        <>
            <header>
                <div className='flex bg-cover bg-header bg-no-repeat w-full h-72'>
                    <div className='m-auto justify-center sm:w-96 md:w-auto'>
                        <img src={Logo} alt="" />
                        <span className='flex justify-center sm:text-xs md:text-base'>Cotação em tempo real</span>
                    </div>
                </div>
            </header>
        </>
    )
};
