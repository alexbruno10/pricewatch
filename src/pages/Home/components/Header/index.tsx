import Logo from '/Logo.svg'

export default function Header() {
    return(
        <>
            <header>
                <div className='flex bg-cover bg-header bg-no-repeat w-full h-72'>
                    <div className='m-auto justify-center sm:w-80 md:w-128'>
                        <img src={Logo} alt="" />
                        <span className='flex justify-center sm:text-xs md:text-base'>Cotação em tempo real</span>
                    </div>
                </div>
            </header>
        </>
    )
};
