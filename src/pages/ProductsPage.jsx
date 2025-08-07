import { useState } from "react";
import { FaChevronDown, FaImage } from "react-icons/fa";

export default function ProductPage() {
  const [categoriaOpen, setCategoriaOpen] = useState(false);
  const [tipoOpen, setTipoOpen] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState("Categoria");
  const [selectedTipo, setSelectedTipo] = useState("Tipo");

  const categorias = ["Bisutería", "Vajillas"];
  const tipos = ["Tipo 1", "Tipo 2", "Tipo 3"];

  const products = Array(6)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: "Título del producto!",
    }));

  return (
    <div className="min-h-screen p-8 bg-[#f6e8cd]">
      <div className="max-w-6xl mx-auto">
        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="flex border-2 border-[#76a7a4] relative z-20 bg-[#f6e8cd]">
            {/* Dropdown Categoria */}
            <div className="relative">
              <button
                onClick={() => {
                  setCategoriaOpen(!categoriaOpen);
                  setTipoOpen(false);
                }}
                className="flex items-center justify-between px-8 py-4 text-lg font-medium transition hover:opacity-80 text-[#76a7a4] min-w-[200px]">
                {selectedCategoria}
                <FaChevronDown
                  className={`ml-4 transition-transform ${categoriaOpen ? "rotate-180" : ""}`}
                  size={16}
                />
              </button>

              {categoriaOpen && (
                <div className="absolute w-full top-full left-0 right-0 border-2 border-t-0 border-[#76a7a4] shadow-lg bg-[#f6e8cd]">
                  {categorias.map((categoria) => (
                    <button
                      key={categoria}
                      onClick={() => {
                        setSelectedCategoria(categoria);
                        setCategoriaOpen(false);
                      }}
                      className="w-full px-8 py-3 text-left text-lg hover:opacity-80 text-[#76a7a4]">
                      {categoria}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Separador */}
            <div className="w-px bg-[#76a7a4]"></div>

            {/* Dropdown Tipo */}
            <div className="relative">
              <button
                onClick={() => {
                  setTipoOpen(!tipoOpen);
                  setCategoriaOpen(false);
                }}
                className="flex items-center justify-between px-8 py-4 text-lg font-medium transition hover:opacity-80 text-[#76a7a4] min-w-[200px]">
                {selectedTipo}
                <FaChevronDown
                  className={`ml-4 transition-transform ${tipoOpen ? "rotate-180" : ""}`}
                  size={16}
                />
              </button>

              {tipoOpen && (
                <div className="absolute top-full left-0 right-0 border-2 border-t-0 border-[#76a7a4] shadow-lg bg-[#f6e8cd]">
                  {tipos.map((tipo) => (
                    <button
                      key={tipo}
                      onClick={() => {
                        setSelectedTipo(tipo);
                        setTipoOpen(false);
                      }}
                      className="block w-full px-8 py-3 text-left text-lg hover:opacity-80 text-[#76a7a4]">
                      {tipo}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 bg-[#76a7a4]">
              {/* Imagen del producto */}
              <div className="aspect-video flex items-center justify-center bg-gray-100">
                <FaImage size={48} className="text-gray-400" />
              </div>

              {/* Título del producto */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-center text-[#f6e8cd]">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay para cerrar dropdowns */}
      {(categoriaOpen || tipoOpen) && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => {
            setCategoriaOpen(false);
            setTipoOpen(false);
          }}
        />
      )}
    </div>
  );
}
