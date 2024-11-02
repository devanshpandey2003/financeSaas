import { Header } from "@/components/ui/headers"


type Props = {
    children: React.ReactNode;
}

const dashboardLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>


    )
};


export default dashboardLayout;

