import "./index.scss"

interface Props {
    children?:React.ReactNode
}

function PageContent({ children } : Props) {
    return (
        <div className="page-content">
            {children}
        </div>
    )
}

export default PageContent
