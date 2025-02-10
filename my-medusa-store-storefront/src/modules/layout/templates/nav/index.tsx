import { Suspense } from "react";
import { listRegions } from "@lib/data/regions";
import { StoreRegion } from "@medusajs/types";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import CartButton from "@modules/layout/components/cart-button";
import SideMenu from "@modules/layout/components/side-menu";

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions);

  return (
    <div className="sticky top-0 inset-x-0 z-50 shadow-md">
      <header className="relative h-16 mx-auto bg-black text-white border-b border-gray-700">
        <nav className="content-container flex items-center justify-between w-full h-full px-6">
          
          {/* Left - Side Menu */}
          <div className="flex items-center">
            <SideMenu regions={regions} />
          </div>

          {/* Center - Store Name */}
          <div className="text-xl font-bold uppercase tracking-wide">
            <LocalizedClientLink href="/" className="hover:text-yellow-500">
              Game On India
            </LocalizedClientLink>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center gap-5">
            <LocalizedClientLink href="/search" className="hover:text-yellow-500">
              🔍 {/* Search Icon */}
            </LocalizedClientLink>
            <LocalizedClientLink href="/account" className="hover:text-yellow-500">
              👤 {/* Account Icon */}
            </LocalizedClientLink>
            <Suspense
              fallback={
                <LocalizedClientLink href="/cart" className="flex items-center hover:text-yellow-500">
                  🛒 {/* Cart Icon */}
                  <span className="ml-1 text-sm">(0)</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  );
}
