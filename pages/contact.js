import Desktop from "@/components/contact/Desktop";
import Mobile from "@/components/contact/Mobile";
import { useBreakpointValue } from "@chakra-ui/react";


export default function contact(){
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    return(
        <>
            {isDesktop ? <Desktop /> : <Mobile />}
        </>
    )
}