import Image from "next/image"

const StudioLogo = (props: any) => {
    // LogoProps includes the title from project config by default
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <Image 
                className="rounded-full object-cover"
                height={16}
                width={16}
                src="/std_logo.svg"
                alt="logo"
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default StudioLogo