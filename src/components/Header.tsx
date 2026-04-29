import * as React from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  Camera,
  Eye,
  Users,
  Shield,
  type LucideIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

type LinkItem = {
  title: string;
  to: string;
  icon: LucideIcon;
  description?: string;
};

const productLinks: LinkItem[] = [
  {
    title: 'GEAR',
    to: '/gear',
    description: 'The robotic arm, the rig, the specs that make the shot.',
    icon: Camera,
  },
  {
    title: 'VISION',
    to: '/vision',
    description: 'Why we built it, and what it unlocks for filmmakers.',
    icon: Eye,
  },
];

const companyLinks: LinkItem[] = [
  {
    title: 'ABOUT',
    to: '/about',
    description: 'The team, the story, the mission behind Glambot.',
    icon: Users,
  },
  {
    title: 'PRIVACY',
    to: '/privacy',
    description: 'How we handle your data — short, plain, and honest.',
    icon: Shield,
  },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full border-b border-transparent transition-colors',
        scrolled && 'border-border bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60',
      )}
    >
      <nav className="mx-auto flex h-24 w-full items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link to="/" className="block p-1" aria-label="Glambot home">
            <img src="/orangewood.png" alt="Glambot" className="h-8" />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1">
                  <ul className="grid w-[420px] gap-1 border border-border bg-popover p-2">
                    {productLinks.map((item) => (
                      <li key={item.to}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                  <div className="px-3 py-2">
                    <p className="font-mono-ibm text-[11px] uppercase tracking-widest text-muted-foreground">
                      Want to see it live?{' '}
                      <Link to="/book" className="text-primary hover:underline">
                        Book a session →
                      </Link>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1">
                  <ul className="grid w-[420px] gap-1 border border-border bg-popover p-2">
                    {companyLinks.map((item) => (
                      <li key={item.to}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="default" className="bg-white font-mono-ibm uppercase p-6 py-5">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        className="flex flex-col justify-between gap-6 overflow-y-auto"
      >
        <div className="flex flex-col gap-6">
          <Section label="Product">
            {productLinks.map((link) => (
              <MobileItem key={link.to} {...link} onClose={() => setOpen(false)} />
            ))}
          </Section>
          <Section label="Company">
            {companyLinks.map((link) => (
              <MobileItem key={link.to} {...link} onClose={() => setOpen(false)} />
            ))}
          </Section>
        </div>
        <div className="flex flex-col gap-2 pb-2">
          <Button asChild className="w-full">
            <Link to="/book" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
  onClose: () => void;
};

function MobileMenu({ open, onClose, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      onClick={onClose}
      className={cn(
        'fixed inset-x-0 top-24 bottom-0 z-40 flex flex-col overflow-hidden border-y border-border md:hidden',
        'bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80',
      )}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
          'size-full px-4 py-6',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="font-mono-ibm text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function MobileItem({
  title,
  description,
  icon: Icon,
  to,
  onClose,
}: LinkItem & { onClose: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="group flex items-center gap-3 border border-transparent p-2 transition-colors hover:border-border hover:bg-foreground/5"
    >
      <div className="flex aspect-square size-11 items-center justify-center border border-border bg-background">
        <Icon className="size-5 text-foreground" />
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="font-mono-ibm text-xs font-semibold uppercase tracking-widest text-foreground group-hover:text-primary">
          {title}
        </span>
        {description ? (
          <span className="font-space text-xs text-muted-foreground">{description}</span>
        ) : null}
      </div>
    </Link>
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  to,
}: LinkItem) {
  return (
    <NavigationMenuLink asChild>
      <Link
        to={to}
        className="group flex w-full items-start gap-3 border border-transparent p-3 transition-colors hover:border-border hover:bg-foreground/5"
      >
        <div className="flex aspect-square size-11 items-center justify-center border border-border bg-background">
          <Icon className="size-5 text-foreground" />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="font-mono-ibm text-xs font-semibold uppercase tracking-widest text-foreground group-hover:text-primary">
            {title}
          </span>
          {description ? (
            <span className="font-space text-xs leading-snug text-muted-foreground">
              {description}
            </span>
          ) : null}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
