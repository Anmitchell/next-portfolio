type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading({children}: SectionHeadingProps) {
    return (
        <h2 className='text-center text-3xl font-bold w-full capitalize'>{children}</h2>
    )
}