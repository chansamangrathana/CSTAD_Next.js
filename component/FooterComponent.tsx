import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
export default function FooterComponent() {
  return (
    <div className="bg-blue-800 p-4 bottom-0">
      <Footer className="container mx-auto w-full bg-blue-800">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
         
              <img
                className="w-24"
                src="https://istad.co/resources/img/CSTAD_120.png"
              />
              <p className="mt-3 text-white md:text-center">
                Start your IT career with CSTAD
              </p>
            </div>
            
            <div>
              <FooterTitle className="text-white" title="LEARN MORE" />
              <FooterLinkGroup col>
                <FooterLink className="text-white" href="#">
                  Course
                </FooterLink>
                <FooterLink className="text-white" href="#">
                  IT News
                </FooterLink>
                <FooterLink className="text-white" href="#">
                  Job Opportunity
                </FooterLink>
                <FooterLink className="text-white" href="#">
                  Privacy Policy
                </FooterLink>
                <FooterLink className="text-white" href="#">
                  FAQ
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className="text-white" title="CONTACT US" />
              <FooterLinkGroup col>
                <FooterLink className="text-white" href="#">
                  (+855) 95-990-910
                </FooterLink>
                <FooterLink className="text-white" href="#">
                  (+855) 93-990-910
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className="text-white" title="FOLLOW US" />
              <FooterLinkGroup col>
                <FooterLink
                  className="text-white"
                  href="https://web.facebook.com/istad.co?ref=embed_page"
                >
                  Facebook Page
                </FooterLink>
                <FooterLink className="text-white" href="#">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full">
            <FooterCopyright
              className="text-white"
              href="#"
              by="Center of Science and Technology Advanced Development | All Rights Reserved™"
              year={2022}
            />
          </div>
        </div>
      </Footer>
    </div>
  );
}
