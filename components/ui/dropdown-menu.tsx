"use client";

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Align = "start" | "end";

type DropdownMenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  closeMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
};

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null);

function useDropdownMenu() {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("DropdownMenu doit etre utilise avec DropdownMenu.");
  }
  return context;
}

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      closeMenu: () => setOpen(false),
      menuRef,
    }),
    [open],
  );

  return (
    <DropdownMenuContext.Provider value={value}>
      <div className="relative inline-flex" ref={menuRef}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({
  children,
  asChild,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const { open, setOpen } = useDropdownMenu();

  const handleClick = () => {
    setOpen(!open);
  };

  if (asChild && isValidElement(children)) {
    const child = Children.only(children) as React.ReactElement<{
      onClick?: () => void;
    }>;
    return cloneElement(child, {
      onClick: () => {
        child.props.onClick?.();
        handleClick();
      },
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center"
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  align = "start",
  className = "",
  children,
}: {
  align?: Align;
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useDropdownMenu();
  if (!open) {
    return null;
  }

  const alignClass = align === "end" ? "right-0" : "left-0";

  return (
    <div
      className={`absolute z-50 mt-2 min-w-44 rounded-2xl border border-white/40 bg-white/90 p-2 text-sm text-zinc-700 shadow-xl shadow-zinc-200/50 backdrop-blur dark:border-white/10 dark:bg-zinc-900/90 dark:text-zinc-200 dark:shadow-black/40 ${alignClass} ${className}`}
      role="menu"
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const { closeMenu } = useDropdownMenu();

  return (
    <button
      type="button"
      role="menuitem"
      onClick={() => {
        onClick?.();
        closeMenu();
      }}
      className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left transition-colors hover:bg-zinc-100/80 dark:hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  );
}
