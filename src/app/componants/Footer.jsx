import footerData from "../data/footer.json";

export default function Footer() {
  return (
    <footer className="border-t border-[#dfe9e4] bg-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* Brand */}
        <div>
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4f8f57]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3C9.5 3 7.5 5 7.5 7.5C7.5 8.6 7.9 9.6 8.6 10.4C6.5 11.2 5 13.2 5 15.5C5 18.5 7.5 21 10.5 21H13.5C16.5 21 19 18.5 19 15.5C19 13.2 17.5 11.2 15.4 10.4C16.1 9.6 16.5 8.6 16.5 7.5C16.5 5 14.5 3 12 3Z"
                  fill="white"
                />
                <path
                  d="M12 7V14M8.5 10.5H15.5"
                  stroke="#4f8f57"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#18231f]">
                {footerData.brand.name}
              </p>

              <p className="mt-1 text-[9px] text-[#7b8781]">
                {footerData.brand.tagline}
              </p>
            </div>
          </a>
        </div>

        {/* Visit */}
        <div>
          <h3 className="text-xs font-semibold text-[#202c27]">
            {footerData.visit.title}
          </h3>

          <p className="mt-4 text-xs leading-5 text-[#718079]">
            {footerData.visit.address}
          </p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xs font-semibold text-[#202c27]">
            {footerData.hours.title}
          </h3>

          <p className="mt-4 text-xs leading-5 text-[#718079]">
            {footerData.hours.weekdays}
            <br />
            {footerData.hours.sunday}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold text-[#202c27]">
            {footerData.contact.title}
          </h3>

          <div className="mt-4 space-y-3">

            {/* Phone */}
            <a
              href={footerData.contact.phone.href}
              className="flex items-center gap-2 text-xs text-[#16885f]"
            >
              <span>☎</span>
              <span>{footerData.contact.phone.label}</span>
            </a>

            {/* Social */}
            <div className="flex items-center gap-4 text-[#16885f]">
              <a
                href={footerData.contact.social.instagram.href}
                aria-label={footerData.contact.social.instagram.label}
              >
                ◎
              </a>

              <a
                href={footerData.contact.social.facebook.href}
                aria-label={footerData.contact.social.facebook.label}
              >
                f
              </a>

              <a
                href={footerData.contact.social.email.href}
                aria-label={footerData.contact.social.email.label}
              >
                ✉
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-[#e4ebe7] px-6 py-5 text-center">
        <p className="text-[10px] text-[#7d8983]">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
}