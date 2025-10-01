import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    const query = `
      *[_type == "testimonial" && isActive == true] | order(order asc, isFeatured desc) {
        _id,
        name,
        category,
        content,
        image,
        studentName,
        formation,
        year,
        isFeatured,
        order
      }
    `;
    
    const testimonials = await client.fetch(query);
    
    return NextResponse.json({ testimonials: testimonials || [] });
  } catch (error) {
    console.error('Erreur lors du chargement des témoignages:', error);
    return NextResponse.json({ testimonials: [] });
  }
}