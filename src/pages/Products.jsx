import Button from '../components/ui/Button';
import { productsData } from '../data/productsData';

function Products() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-[#8a9da6] text-gray-800 dark:bg-[#181a29] dark:text-gray-300';
    }
  };

  return (
    <div className="container-custom py-12 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="section-title">Our Products</h1>
        <p className="section-subtitle max-w-2xl mx-auto">
          Innovative software products designed to solve real-world problems and drive digital transformation.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-[#8a9da6] dark:bg-[#181a29] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-48 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 flex items-center justify-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-5xl">📦</span>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-[#8a9da6] dark:bg-[#181a29] text-gray-700 dark:text-gray-300 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-brand-blue dark:text-brand-gold">
                    {product.price}
                  </span>
                  <Button variant="primary" className="text-sm px-4 py-2">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
