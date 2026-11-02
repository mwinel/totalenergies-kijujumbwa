import { station } from "./station";
export const policies = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "A clear view of how information is handled on this station website.",
    sections: [
      {
        heading: "Who operates this website",
        text: `This website is prepared for ${station.operator}, Uganda. The operator’s legal identity and postal address are awaiting confirmation. Questions about this draft can be sent to ${station.email}.`,
      },
      {
        heading: "Information you choose to share",
        text: "The website has no accounts, contact forms, bookings or payments. Calling, emailing or messaging the station shares the information you provide through your chosen communication service. The station may use that information to respond to your enquiry.",
      },
      {
        heading: "Technical information and providers",
        text: "The application does not include analytics, advertising trackers or embedded maps. A hosting provider may process request data such as IP addresses, browser details and access logs to deliver and protect the website. The hosting provider, log settings and any international processing arrangements must be documented before launch.",
      },
      {
        heading: "External services",
        text: "WhatsApp links open a service operated by Meta. Email and telephone links use your chosen providers. Directions links, once verified, open an external map service. Those services handle information under their own privacy terms; opening this website does not automatically connect to a map or WhatsApp widget.",
      },
      {
        heading: "Retention and requests",
        text: `The operator must confirm retention periods for enquiries and hosting logs before launch. To ask about access, correction or deletion of information you have shared, contact ${station.email}. Include enough detail to identify the enquiry without sending unnecessary sensitive information.`,
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    intro: "A few things to know when exploring our station online.",
    sections: [
      {
        heading: "About this website",
        text: `This informational website is prepared for ${station.operator}. The legal operator identity and address remain subject to verification. It is a local station website, separate from the corporate TotalEnergies Uganda website.`,
      },
      {
        heading: "Products, services and prices",
        text: "The website helps you explore the station and contact the team. Product ranges, services, stock, prices and operating hours should be confirmed directly with the station. Review selections are not a promise of availability, and the website does not accept purchases or bookings.",
      },
      {
        heading: "Images and brand assets",
        text: "Review photographs are AI-generated representative images. They do not show the actual premises or definitive product packaging. TotalEnergies names and supplied brand assets belong to their respective owners. The operator must confirm permission to use all assets before public release.",
      },
      {
        heading: "Using the website",
        text: "Please use the site lawfully and do not attempt to disrupt its operation. External links are provided for convenience; their operators control the content and services at those destinations.",
      },
      {
        heading: "Questions and corrections",
        text: `Please tell the station if information appears inaccurate or a link does not work. Contact ${station.email} or call ${station.phone}. These draft terms need operator review before public launch.`,
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro:
      "Simple browsing, with no advertising or analytics added to the application.",
    sections: [
      {
        heading: "What the application does",
        text: "This application does not intentionally set cookies or use local storage for advertising, analytics or visitor profiles. Menu and dialog state are kept in memory and reset when the page is reloaded. Fonts and images are served from the website rather than embedded third-party widgets.",
      },
      {
        heading: "Hosting behaviour still needs checking",
        text: "A hosting platform, access-protection service or security layer may set technical cookies. The final deployment has not yet been audited. The operator must inspect its cookies and storage, identify any provider and document names, purposes and lifetimes here before launch. This draft does not claim that the deployed site is cookie-free.",
      },
      {
        heading: "When you follow an external link",
        text: "WhatsApp and any external map service may use cookies on their own websites. They are opened only when you follow the relevant link. Please read those services’ cookie policies for details.",
      },
      {
        heading: "Your choices and future changes",
        text: `You can manage cookies through your browser settings. If optional analytics or advertising is introduced, appropriate consent controls must be implemented before it runs and this policy updated. Questions can be sent to ${station.email}.`,
      },
    ],
  },
};
