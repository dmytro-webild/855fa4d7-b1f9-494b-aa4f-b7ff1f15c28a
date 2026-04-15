"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="blurBottom"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "products",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Capital Dental Center"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Confidently Yours"
      description="Modern dental care with clear guidance, gentle hands, and a team that truly listens. No surprises—just honest care designed around you."
      buttons={[
        {
          text: "Book Your Appointment",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-woman-leaning-wall_1262-1743.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Patient-Centered ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/young-female-dentist-showing-patient-dental-xray-dentistry-concept_169016-67306.jpg",
          alt: "Care",
        },
        {
          type: "text",
          content: " Excellence",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Confusing hidden billing",
          "Unclear treatment timelines",
          "Fear of discomfort",
        ],
      }}
      positiveCard={{
        items: [
          "Transparent upfront pricing",
          "Comfort amenities (Netflix/Wifi)",
          "Gentle, listening staff",
        ],
      }}
      title="Why Choose Us"
      description="We bridge the gap between complex HMO needs and gentle, transparent dental care."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "General Check-up",
          price: "$89",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-various-dental-tools-tray_23-2147905991.jpg",
        },
        {
          id: "2",
          name: "Advanced Cleaning",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-dentist-tools-dental-office_1204-395.jpg",
        },
        {
          id: "3",
          name: "Teeth Whitening",
          price: "$350",
          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-receiving-dental-treatment_107420-65506.jpg",
        },
        {
          id: "4",
          name: "Composite Fillings",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/silver-aesthetic-wallpaper-with-hair-accessories_23-2149871682.jpg",
        },
        {
          id: "5",
          name: "Pediatric Exams",
          price: "$75",
          imageSrc: "http://img.b2bpic.net/free-photo/pediatric-dentist-little-girl-reception-dentist_1321-3220.jpg",
        },
        {
          id: "6",
          name: "Digital X-Rays",
          price: "$95",
          imageSrc: "http://img.b2bpic.net/free-photo/equipment-dental-instruments-dentist-s-office-tools-close-up_8353-1673.jpg",
        },
      ]}
      title="Our Clinical Services"
      description="Comprehensive care covering everything from preventative hygiene to advanced restorations."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Dental Association",
        "Healthcare Safety",
        "Clinical Excellence",
        "Modern Patient Care",
        "Certified Hygienists",
        "Medical Trust Council",
        "Advanced Tech Council",
      ]}
      title="Trusted by Healthcare Standards"
      description="We adhere to the highest standards of clinical excellence and insurance compliance."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          date: "Jan 2024",
          title: "Great Experience",
          quote: "The most comfortable dental visit I've ever had. No hidden charges at all!",
          tag: "Regular Patient",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-young-woman-sitting-dental-chair_23-2147862029.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-dentist-patient-smiling_23-2148396176.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          date: "Dec 2023",
          title: "Professional Team",
          quote: "Clear billing and gentle care. Finally, a clinic that explains what they're doing.",
          tag: "Professional",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-doctor-with-tablet_23-2149103568.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-sitting-dentist-s-office_1157-28568.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          date: "Nov 2023",
          title: "Highly Recommended",
          quote: "Fantastic atmosphere and very kid-friendly. My son actually enjoyed it!",
          tag: "Parent",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-female-doctor-holding-medical-reports_107420-73971.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/specialist-leading-meeting-with-medical-team-discuss-treatment-service_482257-106971.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          date: "Oct 2023",
          title: "Excellent Service",
          quote: "Transparent pricing for my HMO. No more confusion about coverage.",
          tag: "HMO Patient",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-doctor-checking-man_23-2149103570.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-blue-uniform-pointing-aside-while-winking-space-text_176474-19665.jpg",
        },
        {
          id: "5",
          name: "Jessica Lee",
          date: "Sep 2023",
          title: "Gentle Dentistry",
          quote: "I used to be terrified of the dentist, but their staff made me feel so calm.",
          tag: "Patient",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-couple-makes-photo-outdoors_146671-15113.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/female-patient-smiling-while-talking-doctor_107420-65663.jpg",
        },
      ]}
      title="Patient Stories"
      description="Real experiences from those who trusted us with their smile."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Do you accept HMO?",
          content: "Yes, we work with various HMO providers and provide full transparency on what is covered before any treatment begins.",
        },
        {
          id: "2",
          title: "Are there hidden charges?",
          content: "Never. We believe in complete transparency and will review all costs with you before we start any work.",
        },
        {
          id: "3",
          title: "How long will my treatment take?",
          content: "We prioritize efficient, fast scheduling while ensuring quality care, keeping you informed of your timeline at every step.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about our services and insurance policies."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in touch"
      title="Book Your Appointment"
      description="Start your journey to a confident smile. Reach out to schedule today."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#products",
            },
          ],
        },
        {
          title: "Clinic Info",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Capital Dental Center"
      bottomRightText="All rights reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
