export type Offering = {
  id: string;
  title: string;
  summary: string;
  description: string;
  details: string[];
  image?: string;
  alt?: string;
  tone: string;
  confirmed: boolean;
};

export const products: Offering[] = [
  {
    id: "fuels",
    title: "Fuels",
    tone: "rose",
    confirmed: false,
    summary: "Fuel for everyday commutes, working days and longer journeys.",
    description:
      "From the morning commute to a journey further from home, refuelling is part of keeping your day moving. Choose fuel that matches your vehicle’s requirements, and speak to our team about the options available for your next fill-up.",
    details: [
      "Check your vehicle handbook or fuel-cap label for the required fuel type and grade.",
      "Ask our team about available petrol and diesel options.",
      "Contact the station for current pump prices before planning your stop.",
    ],
    image: "/images/fuels.webp",
    alt: "Representative close-up of a fuel nozzle at a pump",
  },
  {
    id: "lubricants",
    title: "Lubricants",
    tone: "sage",
    confirmed: false,
    summary: "Engine oils that help reduce friction and protect moving parts.",
    description:
      "Engine oil lubricates moving parts, helping to reduce friction and wear as your engine runs. Choosing the correct oil is an important part of routine vehicle care. Explore TotalEnergies lubricants with our team and check the product specification against your vehicle handbook before purchasing.",
    details: [
      "Match the oil’s viscosity grade and approvals to your vehicle manufacturer’s requirements.",
      "Follow the recommended oil-change intervals for your vehicle.",
      "Ask our team about available lubricant ranges, pack sizes and prices.",
    ],
    image: "/images/lubricants-branded.webp",
    alt: "Representative engine oil bottle with a TotalEnergies logo on a soft sage background",
  },
  {
    id: "cooking-gas",
    title: "Cooking Gas",
    tone: "sand",
    confirmed: false,
    summary: "Cooking gas for preparing everyday meals with controllable heat.",
    description:
      "From a quick breakfast to a shared evening meal, LPG cooking gas provides an adjustable flame for everyday cooking. Speak to our team about cooking gas options for your home, including cylinder sizes, refill or exchange arrangements, and accessories suited to your setup.",
    details: [
      "Ask about available cylinder sizes and the cost of a new cylinder or refill.",
      "Check regulator and accessory compatibility with your cylinder and cooker.",
      "Confirm the station’s exchange arrangements before bringing your cylinder.",
    ],
    image: "/images/cooking-gas-branded.webp",
    alt: "Representative red cooking gas cylinder with white TotalEnergies branding on a warm neutral background",
  },
];

export const services: Offering[] = [
  {
    id: "forecourt-assistance",
    title: "Forecourt assistance",
    tone: "rose",
    confirmed: false,
    summary: "Speak to our team about refuelling, product enquiries and any help you need during your stop.",
    description:
      "Make your next stop easier with a conversation at the forecourt. Whether you have a question about fuel, need help finding a product or have a particular assistance need, tell our team what you’re looking for so they can explain the support available.",
    details: [
      "Ask about fuel options and product information when you arrive.",
      "Call ahead if you have a particular accessibility or assistance need.",
    ],
  },
  {
    id: "vehicle-care",
    title: "Vehicle care",
    tone: "sage",
    confirmed: false,
    summary: "Plan your vehicle’s next maintenance stop with information on available care options and lubricants.",
    description:
      "Routine care starts with understanding what your vehicle needs. Share your vehicle details and the work you have in mind with our team, then check which care options are available. For lubricant enquiries, bring the oil specification from your vehicle handbook to help guide your choice.",
    details: [
      "Call ahead to discuss the work you need and confirm available services.",
      "Ask about service hours, pricing and whether a booking is needed.",
    ],
  },
  {
    id: "everyday-essentials",
    title: "Everyday essentials",
    tone: "sand",
    confirmed: false,
    summary: "Find out which everyday essentials you can pick up while stopping for fuel, saving you another trip.",
    description:
      "Make your fuel stop part of your everyday errands. If there’s something you need for the journey or for home, contact our team to check the current selection before visiting. They can confirm stock and prices so you can plan your stop around what you need.",
    details: [
      "Ask about the current product selection and prices.",
      "Confirm stock and shopping hours before making a special trip.",
    ],
  },
];
