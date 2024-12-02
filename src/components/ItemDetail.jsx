'use client'

import { useState, useContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { cartContext } from "./cart-context"
import { ItemCount } from "./item-count"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

export default function ItemDetail(props) {
  const { id, nombre: name, descripcion: description, img, precio: price, stock } = props
  const { addToCart, getItemInCart } = useContext(cartContext)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)
  
  const itemInCart = getItemInCart(id)
  const maxItems = itemInCart ? stock - itemInCart.count : stock
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44]

  function handleAddToCart(clickCount) {
    if (!selectedSize) {
      alert("Por favor seleccione un talle")
      return
    }
    addToCart({ ...props, size: selectedSize }, clickCount)
    alert(`${name} agregado al carrito, cantidad: ${clickCount}`)
    setIsAddedToCart(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 p-8">
          <Image
            src={img}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
            <p className="text-2xl font-semibold tracking-tight">
              ${price.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Talle</h3>
                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        className={cn(
                          "h-12 w-12",
                          selectedSize === size && "ring-2 ring-primary"
                        )}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {itemInCart && (
                    <p className="text-sm text-muted-foreground">
                      Ya agregaste {itemInCart.count} unidades de este producto
                    </p>
                  )}
                  
                  {stock > 0 ? (
                    isAddedToCart ? (
                      <Button asChild className="w-full">
                        <Link href="/cart">Ir al carrito</Link>
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
                        <HoverCard>
                          <HoverCardTrigger>
                            <p className="text-xs text-muted-foreground cursor-help">
                              Stock disponible: {stock} unidades
                            </p>
                          </HoverCardTrigger>
                          <HoverCardContent>
                            Cantidad máxima por compra: {maxItems} unidades
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    )
                  ) : (
                    <p className="text-sm font-medium text-destructive">
                      No hay stock disponible
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

