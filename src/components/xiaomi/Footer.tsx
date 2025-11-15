// @ts-nocheck
/* eslint-disable  */
"use client";

import Link from "next/link";
import Image from "next/image";

import InstallAppImage from "statics/images/install-app-button.png";
import EighteenPlusLogo from "statics/images/18-plus-logo.png";
import SecureLogo from "statics/images/secure-logo.png";
import VisaLogo from "statics/images/visa-logo.png";
import MastercardLogo from "statics/images/mastercard-logo.png";
import AstroPayLogo from "statics/images/astropay-logo.png";
import InteracLogo from "statics/images/interac-logo.png";
import JetonbankLogo from "statics/images/jetonbank-logo.png";
export default function Footer() {
  return (
    <footer className="flex flex-col items-start gap-10 self-stretch px-4 md:px-12 lg:px-24 2xl:px-[236px] py-10 border-t border-xiaomi-border-subdued">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 self-stretch">
        <div className="flex flex-col items-start gap-3">
          <h3 className="self-stretch text-xiaomi-text-subdued text-base font-black italic uppercase leading-7">About Us</h3>
          <div className="flex flex-col items-start gap-2 self-stretch">
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Company Details
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Terms & Conditions
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Affiliate
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="self-stretch text-xiaomi-text-subdued text-base font-black italic uppercase leading-7">Help</h3>
          <div className="flex flex-col items-start gap-2 self-stretch">
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              F.A.Q (Frequently Asked Questions)
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              AML/KYC Policy
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Refund Policy
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Dispute Resolution
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="self-stretch text-xiaomi-text-subdued text-base font-black italic uppercase leading-7">Our Products</h3>
          <div className="flex flex-col items-start gap-2 self-stretch">
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Product
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Contact
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Price
            </Link>
            <Link href="#" className="self-stretch text-xiaomi-text-accent text-sm font-normal leading-5 hover:text-xiaomi-text-primary">
              Sales
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-3 self-stretch">
            <h3 className="text-xiaomi-text-subdued text-base font-black italic uppercase leading-7">Contact Us</h3>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <p className="text-xiaomi-text-accent text-sm font-normal leading-5">support@xiaomi.email</p>
              <p className="text-xiaomi-text-accent text-sm font-normal leading-5">affiliate@xiaomi.com</p>
            </div>
          </div>
          <button
            className="w-[151.4px] h-11 bg-xiaomi-neutral-subdued rounded-lg flex items-center justify-center
           overflow-hidden hover:opacity-80 transition-opacity"
          >
            <Image src={InstallAppImage} alt="Install App" width={151} height={44} className="object-contain" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-5 self-stretch">
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image src={EighteenPlusLogo} alt="18+ Restricted" width={31} height={30} className="object-contain" />
          <Image src={SecureLogo} alt="Secure SSL Encryption" width={88} height={30} className="object-contain" />
        </div>
        <p className="flex-1 text-xiaomi-text-accent text-sm font-normal text-center leading-5">
          For designated models of Xiaomi smartphone, you can enjoy the warranty services for your device at designated Xiaomi.
        </p>
      </div>

      <p className="self-stretch text-xiaomi-text-accent text-sm text-center font-normal leading-5">
        Customers should provide a valid purchase proof and warranty card. After inspected by the Xiaomi authorizedservice center and confirmed that the
        smartphone meets the warranty conditions, you can enjoy the in-warranty service for free².Warranty determination rules are subjected to the local
        service center.
      </p>

      <div className="flex items-center justify-center gap-2 self-stretch px-0 py-4 rounded-xl bg-xiaomi-neutral-normal">
        <p className="flex-1 text-xiaomi-text-accent text-center text-sm font-normal leading-5">© Copyright 2025. All Rights Reserved</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 self-stretch">
        <Image src={VisaLogo} alt="Visa" height={24} className="h-6 w-auto object-contain" />
        <Image src={MastercardLogo} alt="Mastercard" height={24} className="h-6 w-auto object-contain" />
        <Image src={AstroPayLogo} alt="AstroPay" height={24} className="h-6 w-auto object-contain" />
        <Image src={InteracLogo} alt="Interac" height={24} className="h-6 w-auto object-contain" />
        <Image src={JetonbankLogo} alt="Jetonbank" height={24} className="h-6 w-auto object-contain" />
      </div>
    </footer>
  );
}
