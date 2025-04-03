import { listCategories } from "@lib/data/categories";
import { listCollections } from "@lib/data/collections";
import { Text, clx } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" });
  const productCategories = await listCategories();

  return (
    <footer className="border-t border-ui-border-base w-full bg-gray-100 text-gray-800">
      <div className="content-container flex flex-col w-full px-6 py-16 md:px-12 lg:px-20">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          
          {/* Logo & About */}
          <div className="flex flex-col space-y-4">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-gray-700"
            >
              Shop Mitra
            </LocalizedClientLink>
            <p className="text-sm text-gray-600">
              Your Ultimate Sports Destination! 🏆 Play Hard, Shop Smart!
            </p>
          </div>

          {/* Categories & Collections */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Categories */}
            {productCategories?.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Categories</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {productCategories?.slice(0, 6).map((c) => (
                    !c.parent_category && (
                      <li key={c.id}>
                        <LocalizedClientLink
                          href={`/categories/${c.handle}`}
                          className="hover:text-gray-900"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            )}

            {/* Collections */}
            {collections?.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Collections</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        href={`/collections/${c.handle}`}
                        className="hover:text-gray-900"
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Connect With Us</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  📘 Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  📸 Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  🐦 Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Store Locations */}
        <div className="border-t border-gray-300 mt-10 pt-10">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Stores</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700">
            <p>📍 M.G. Road, 1st Floor, Near Ghitorni Metro Stn, Delhi</p>
            <p>📍 7A Short Street, Ground Floor, Near Park St, Kolkata</p>
            <p>📍 R Deccan Mall, Ground Floor, J M Road, Pune</p>
          </div>
          <a href="/our-stores" className="block mt-3 text-blue-600 hover:text-blue-800 text-sm">
            ➡ More Stores
          </a>
        </div>

        {/* Copyright & Medusa CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-300 pt-6 text-gray-600 text-sm">
          <Text>© {new Date().getFullYear()} Shop Mitra All rights reserved.</Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
