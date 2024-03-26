import { CheckCircle, Code2Icon, HomeIcon, InfoIcon, Laptop2, MailIcon, MailCheckIcon, PhoneCallIcon } from 'lucide-react'
import {FaFacebookF, FaGraduationCap, FaLaptopCode, FaUsers} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

export const Icons = {
 Code2Icon,
 HomeIcon,
 InfoIcon,
 Laptop2,
 MailIcon,
 CheckCircle,
 MailCheckIcon, 
 PhoneCallIcon,
 FaFacebookF,
 BsGithub,
 BsLinkedin,
 FaUsers,
 FaGraduationCap,
 FaLaptopCode
}

export type Icon = keyof typeof Icons
