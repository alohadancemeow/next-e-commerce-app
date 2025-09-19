import { ProductCard } from "@/components/product-card"
import { getRelatedProducts } from "@/lib/products"
import type { Product } from "@/lib/types"

interface RelatedProductsProps {
  currentProduct: Product
  limit?: number
}

export function RelatedProducts({ currentProduct, limit = 4 }: RelatedProductsProps) {
  const relatedProducts = getRelatedProducts(currentProduct.id, currentProduct.category, limit)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Related Products</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Discover more products you might like in the {currentProduct.category.toLowerCase()} category.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
