"use client";

import * as React from "react";
import { Filter, Info, MapPin } from "lucide-react";
import {
  Badge,
  Button,
  Card,
  Combobox,
  type ComboboxOption,
  Container,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Grid,
  Input,
  Label,
  List,
  ListItem,
  Masthead,
  MastheadActions,
  MastheadBrand,
  MastheadLink,
  MastheadNav,
  Metric,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Sidebar,
  SidebarLink,
  SidebarNav,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeToggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ash2k5/ui";

const eyebrow =
  "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)] text-on-surface-variant";

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-outline-variant py-12">
      <p className={eyebrow}>{index}</p>
      <h2 className="mb-8 mt-1 font-display text-[length:var(--text-headline-lg-size)] leading-[var(--text-headline-lg-lh)] text-on-surface">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
}

const SWATCHES = [
  "surface",
  "surface-container",
  "surface-container-high",
  "primary",
  "on-surface",
  "on-surface-variant",
  "outline",
  "error",
  "success",
  "warning",
  "info",
];

const TYPE_SCALE = [
  { cls: "ds-display", label: "Display" },
  { cls: "ds-headline-lg", label: "Headline LG" },
  { cls: "ds-headline-md", label: "Headline MD" },
  { cls: "ds-body-lg", label: "Body LG" },
  { cls: "ds-body-md", label: "Body MD" },
  { cls: "ds-label-md", label: "Label MD" },
];

const BUILDINGS: ComboboxOption[] = [
  { value: "nippert", label: "Nippert Stadium" },
  { value: "langsam", label: "Langsam Library" },
  { value: "tangeman", label: "Tangeman University Center" },
  { value: "baldwin", label: "Baldwin Hall" },
  { value: "rec", label: "Campus Recreation Center" },
];

export default function StyleguidePage() {
  const [building, setBuilding] = React.useState("");
  const [genre, setGenre] = React.useState("");

  return (
    <TooltipProvider delayDuration={150}>
      <Masthead>
        <MastheadBrand>UI</MastheadBrand>
        <MastheadNav>
          <MastheadLink href="#components" active>
            Components
          </MastheadLink>
          <MastheadLink href="#foundations">Foundations</MastheadLink>
          <MastheadLink href="#overlays">Overlays</MastheadLink>
        </MastheadNav>
        <MastheadActions>
          <ThemeToggle />
        </MastheadActions>
      </Masthead>

      <main>
        <Container>
          <section className="py-16">
            <p className={eyebrow}>Components</p>
            <h1 className="mt-2 font-display text-[length:var(--text-display-size)] leading-[var(--text-display-lh)] tracking-[var(--text-display-tracking)] text-on-surface">
              @ash2k5/ui
            </h1>
            <p className="mt-4 max-w-[60ch] font-body text-[length:var(--text-body-lg-size)] leading-[var(--text-body-lg-lh)] text-on-surface-variant">
              A Radix + CVA component library themed for light and dark.
              Every control carries hover, focus, disabled, and where
              relevant loading and error states, in both the warm gallery-white
              and near-black themes.
            </p>
            <div className="mt-8">
              <Row>
                <Button>Primary</Button>
                <Button variant="ghost">Secondary</Button>
                <Button variant="text">Tertiary</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </Row>
            </div>
          </section>

          <Section index="01" title="Buttons">
            <div className="flex flex-col gap-6">
              <Row>
                <Button>Primary</Button>
                <Button variant="ghost">Secondary</Button>
                <Button variant="text">Tertiary</Button>
              </Row>
              <Row>
                <Button loading>Saving</Button>
                <Button variant="ghost" loading>
                  Saving
                </Button>
                <Button disabled>Disabled</Button>
                <Button variant="ghost" disabled>
                  Disabled
                </Button>
              </Row>
            </div>
          </Section>

          <Section index="02" title="Inputs">
            <Card level="resting" className="max-w-xl">
              <div className="flex flex-col gap-6">
                <Input label="Search" placeholder="Find a building..." />
                <Input
                  label="Email"
                  defaultValue="not-an-email"
                  error="Enter a valid email address."
                />
                <Input label="Disabled" placeholder="Unavailable" disabled />
                <Textarea label="Notes" placeholder="Add a short note..." />
              </div>
            </Card>
          </Section>

          <Section index="03" title="Selection">
            <div className="grid max-w-2xl gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-stack-sm">
                <Label>Genre (Select)</Label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fiction</SelectLabel>
                      <SelectItem value="literary">Literary</SelectItem>
                      <SelectItem value="mystery">Mystery</SelectItem>
                      <SelectItem value="scifi">Science Fiction</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-stack-sm">
                <Label>Building (Combobox)</Label>
                <Combobox
                  options={BUILDINGS}
                  value={building}
                  onValueChange={setBuilding}
                  placeholder="Choose a building"
                  searchPlaceholder="Search buildings..."
                />
              </div>
            </div>
          </Section>

          <Section index="04" title="Badges">
            <Row>
              <Badge>Default</Badge>
              <Badge variant="success">Live</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="danger">Failed</Badge>
              <Badge variant="info">Beta</Badge>
            </Row>
          </Section>

          <Section index="05" title="Cards & Metrics">
            <Grid>
              <Card level="resting" className="col-span-4">
                <p className={eyebrow}>Level 1 — Resting</p>
                <h3 className="mt-2 font-display text-[length:var(--text-headline-md-size)] text-on-surface">
                  Glass card
                </h3>
                <p className="mt-2 font-body text-[length:var(--text-body-md-size)] text-on-surface-variant">
                  Glass fill with refracting border, no shadow.
                </p>
              </Card>
              <Card level="floating" className="col-span-4">
                <p className={eyebrow}>Level 2 — Floating</p>
                <h3 className="mt-2 font-display text-[length:var(--text-headline-md-size)] text-on-surface">
                  Floating card
                </h3>
                <p className="mt-2 font-body text-[length:var(--text-body-md-size)] text-on-surface-variant">
                  Adds the ambient shadow for modals and popovers.
                </p>
              </Card>
              <Card level="flat" className="col-span-4">
                <p className={eyebrow}>Flat — Dashboard</p>
                <h3 className="mt-2 font-display text-[length:var(--text-headline-md-size)] text-on-surface">
                  Opaque card
                </h3>
                <p className="mt-2 font-body text-[length:var(--text-body-md-size)] text-on-surface-variant">
                  Solid container for dense, data-heavy contexts.
                </p>
              </Card>
            </Grid>
            <Card level="flat" className="mt-6">
              <Grid>
                <div className="col-span-4">
                  <Metric
                    label="Routes planned"
                    value="1,284"
                    delta={{ value: "12%", direction: "up" }}
                    data={[4, 6, 5, 8, 7, 10, 12]}
                  />
                </div>
                <div className="col-span-4">
                  <Metric
                    label="Avg walk time"
                    value="6.4m"
                    delta={{ value: "3%", direction: "down" }}
                    data={[9, 8, 8, 7, 7, 6, 6]}
                  />
                </div>
                <div className="col-span-4">
                  <Metric label="Buildings indexed" value="312" />
                </div>
              </Grid>
            </Card>
          </Section>

          <Section index="06" title="Tabs">
            <Tabs defaultValue="overview" className="max-w-2xl">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="routes">Routes</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="disabled" disabled>
                  Locked
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <p className="font-body text-[length:var(--text-body-md-size)] text-on-surface-variant">
                  Overview of the campus routing engine and indexed buildings.
                </p>
              </TabsContent>
              <TabsContent value="routes">
                <p className="font-body text-[length:var(--text-body-md-size)] text-on-surface-variant">
                  Saved routes and shortcuts drawn by admins.
                </p>
              </TabsContent>
              <TabsContent value="activity">
                <p className="font-body text-[length:var(--text-body-md-size)] text-on-surface-variant">
                  Recent searches and route requests.
                </p>
              </TabsContent>
            </Tabs>
          </Section>

          <Section index="07" title="Lists">
            <List className="max-w-2xl">
              <ListItem
                index={1}
                title="Plan the route"
                description="A* search over the campus walking graph."
                action={<Badge variant="success">Ready</Badge>}
              />
              <ListItem
                index={2}
                title="Search buildings"
                description="Type-ahead over the indexed building list."
                action={<Badge>312</Badge>}
              />
              <ListItem
                index={3}
                title="Draw shortcuts"
                description="Admin-only editing of the routing graph."
                action={<Badge variant="warning">Admin</Badge>}
              />
            </List>
          </Section>

          <div id="overlays" />
          <Section index="08" title="Overlays">
            <Row>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm route</DialogTitle>
                    <DialogDescription>
                      Plan a walking route from Nippert Stadium to Langsam
                      Library?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="ghost">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button>Confirm</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost">
                    <Filter className="size-4" aria-hidden />
                    Filter
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start">
                  <div className="flex flex-col gap-4">
                    <Input label="Min rating" type="number" placeholder="0" />
                    <Button>Apply</Button>
                  </div>
                </PopoverContent>
              </Popover>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="text">
                    <Info className="size-4" aria-hidden />
                    Hover me
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Walking distance only</TooltipContent>
              </Tooltip>
            </Row>
          </Section>

          <div id="foundations" />
          <Section index="09" title="Navigation">
            <Card level="flat" className="max-w-xs p-0">
              <Sidebar>
                <SidebarNav>
                  <SidebarLink href="#" active icon={<MapPin />}>
                    Map
                  </SidebarLink>
                  <SidebarLink href="#" icon={<Filter />}>
                    Filters
                  </SidebarLink>
                  <SidebarLink href="#" icon={<Info />}>
                    About
                  </SidebarLink>
                  <SidebarLink href="#" icon={<Info />} disabled>
                    Settings
                  </SidebarLink>
                </SidebarNav>
              </Sidebar>
            </Card>
          </Section>

          <Section index="10" title="Color roles">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
              {SWATCHES.map((name) => (
                <div key={name} className="flex flex-col gap-2">
                  <div
                    className="h-20 border border-outline-variant"
                    style={{ background: `var(--${name})` }}
                  />
                  <span className="font-sans text-[length:var(--text-label-sm-size)] text-on-surface-variant">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section index="11" title="Type scale">
            <div className="flex flex-col gap-4">
              {TYPE_SCALE.map((t) => (
                <div key={t.cls} className="flex items-baseline gap-6">
                  <span className={`${eyebrow} w-32 shrink-0`}>{t.label}</span>
                  <span className={t.cls}>Typeface</span>
                </div>
              ))}
            </div>
          </Section>

          <footer className="border-t border-outline-variant py-10">
            <p className="font-body text-[length:var(--text-body-sm-size)] text-on-surface-variant">
              @ash2k5/ui - styleguide
            </p>
          </footer>
        </Container>
      </main>
    </TooltipProvider>
  );
}
