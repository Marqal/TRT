export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center h-16">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} TFT بالعربي. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
} 