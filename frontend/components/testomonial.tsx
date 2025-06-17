import { TestimonialsSection } from "./testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Dr. Aarti Sharma",
      handle: "@draarti",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face"
    },
    text: "MediLink has transformed the way we manage patient appointments and records. Everything is faster and more organized.",
    href: "https://twitter.com/draarti"
  },
  {
    author: {
      name: "Nurse Rohit Verma",
      handle: "@nursrohit",
      avatar: "https://images.unsplash.com/photo-1607746882042-3b5d3ef7f007?w=150&h=150&fit=crop&crop=face"
    },
    text: "With MediLink, we’ve reduced wait times and improved coordination between departments. It’s a lifesaver for busy hospitals.",
    href: "https://twitter.com/nursrohit"
  },
  {
    author: {
      name: "Priya Nair",
      handle: "@priyanair",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f3?w=150&h=150&fit=crop&crop=face"
    },
    text: "Booking a consultation is now as easy as ordering food. MediLink is intuitive and reliable—even my parents use it!"
  }
];

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Trusted by Healthcare Professionals & Patients"
      description="Join hospitals, doctors, and thousands of patients using MediLink to make healthcare smarter and more accessible."
      testimonials={testimonials}
    />
  );
}
