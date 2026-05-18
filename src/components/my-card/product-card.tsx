import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productType } from "@/lib/product/product-type";

export function CardProduct({ title, description, image, price }: productType) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-80"
      />
      <CardHeader>
        <CardAction>
          <div className="p-2 bg-amber-100  ">
            <Badge variant="secondary">{price}$</Badge>
          </div>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p className="line-clamp-2">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
