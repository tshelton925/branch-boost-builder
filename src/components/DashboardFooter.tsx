export function DashboardFooter() {
  return (
    <footer className="border-t bg-muted/30 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lending Heights. All rights reserved.</p>
          <p className="mt-1">Pro Forma Builder for Mortgage Branch Managers</p>
        </div>
      </div>
    </footer>
  );
}
