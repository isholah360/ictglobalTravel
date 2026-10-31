export default function WhatsAppLink({ children = 'Chat with our team', className = '' }) {
  // Replace this demo number with your agency's WhatsApp number in international format, without + or spaces.
  const phone = '2340000000000'
  const message = encodeURIComponent('Assalamu alaikum, I would like to enquire about your Hajj and Umrah services.')
  return <a className={className} href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noreferrer">{children}</a>
}
