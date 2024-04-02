import useUserData from "../../hook/useUserData";


const About = () => {
const {data:userData}=useUserData()

const {user:{
    about:{name,}
}}=userData

    return (
        <div>
            
        </div>
    );
};

export default About;