
interface EmailJsConfigure {
    serviceId:string | undefined
    templateId:string | undefined
    publicKey:string | undefined
}

export const emailJsConfigure:EmailJsConfigure = {
    serviceId:process.env.NEXT_PUBLIC_SERVICE_ID,
    templateId:process.env.NEXT_PUBLIC_TEMPLATE_ID,
    publicKey:process.env.NEXT_PUBLIC_EMAILJS_KEY
}