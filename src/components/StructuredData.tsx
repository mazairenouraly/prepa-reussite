import { organizationSchema, websiteSchema } from '@/lib/structured-data'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'custom'
  data?: Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return organizationSchema
      case 'website':
        return websiteSchema
      case 'custom':
        return data
      default:
        return organizationSchema
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema())
      }}
    />
  )
} 