const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <nav class="w-full bg-gray-100 p-4">
    <div class="container text-right">&copy; {currentYear} Karolina Kołatek</div>
  </nav>
  )
}

export default Footer;
