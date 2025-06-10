"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", padding: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {product.description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/products/${product.id}`} passHref>
          <Button size="small" variant="outlined">
            مشاهده محصول
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
