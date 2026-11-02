/** Supplied review details. Confirm every field with the operator before launch. */
export const station = {
  copyrightYear: 2026,
  name: "TotalEnergies Kijujumbwa",
  operator: "TotalEnergies Kijujumbwa",
  locality: "Kijujumbwa",
  country: "Uganda",
  phone: "0705 777086",
  telephone: "+256705777086",
  whatsapp: "256705777086",
  email: "info@totalenergies.com",
  hours: "24 hours",
  schemaHours: "Mo-Su 00:00-24:00",
  policiesReviewed: false,
  address: "",
  mapUrl: "",
  coordinates: null as { latitude: number; longitude: number } | null,
  verified: false,
};

export const contactLinks = {
  phone: `tel:${station.telephone}`,
  email: `mailto:${station.email}`,
  whatsapp: `https://wa.me/${station.whatsapp}?text=${encodeURIComponent("Hello TotalEnergies Kijujumbwa, I would like to enquire about your station.")}`,
};
