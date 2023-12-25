import { useRouter } from "next/navigation";

const Header = ({ headerText }) => {
    const router = useRouter();

    return <label className="header" onClick={() => router.push('/translators')}>{headerText}</label>;
};

export default Header;
