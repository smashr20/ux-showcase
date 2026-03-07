const Footer = () => (
  <footer className="border-t border-border py-8 bg-background">
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold text-gradient">JD.</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jane Doe. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
