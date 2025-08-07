import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className="bg-[#76a7a4] dark:bg-[#cb1d8d] text-white py-8 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Media</h3>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="hover:text-[#f6e8cd] dark:hover:text-[#10cdef] transition-colors"
            >
              <AiFillInstagram className="w-8 h-8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="hover:text-[#f6e8cd] dark:hover:text-[#10cdef] transition-colors"
            >
              <FaFacebook className="w-8 h-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link 
              href="https://wa.me" 
              target="_blank"
              className="hover:text-[#f6e8cd] dark:hover:text-[#10cdef] transition-colors"
            >
              <IoLogoWhatsapp className="w-8 h-8" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm opacity-80">
            <p>Creado y diseñado por Thomas Monzon</p>
            <p>Todos los derechos reservados © 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
