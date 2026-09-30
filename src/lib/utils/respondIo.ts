import { tenantConfig } from "@/config/tenant";

export interface InquiryPayload {
  productName: string;
  sku?: string;
  length?: string;
  texture?: string;
  laceType?: string;
  priceKES?: number;
  referralCode?: string;
}

export function generateRespondIoWhatsAppUrl(payload: InquiryPayload): string {
  const phone = tenantConfig.communications.whatsappNumber;

  const lines = [
    `*Inquiry from Sophie's Human Hair Catalog*`,
    `----------------------------------------`,
    `*Product:* ${payload.productName}${payload.sku ? ` (SKU: ${payload.sku})` : ""}`,
    payload.length ? `*Length:* ${payload.length}` : null,
    payload.texture ? `*Texture:* ${payload.texture}` : null,
    payload.laceType ? `*Lace Construction:* ${payload.laceType}` : null,
    payload.priceKES ? `*Catalog Price:* KSh ${payload.priceKES.toLocaleString()}` : null,
    payload.referralCode ? `*Ambassador Ref:* ${payload.referralCode}` : null,
    `----------------------------------------`,
    `Hello Sophie's sales team, is this unit currently in stock at the Mugumoini hub? Please share a quick video of the hair and confirm delivery options.`,
  ].filter(Boolean);

  const encoded = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phone}?text=${encoded}`;
}