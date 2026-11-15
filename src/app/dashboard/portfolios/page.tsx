"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Edit3,
  ExternalLink,
  Globe,
  Trash2,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";

interface Portfolio {
  id: string;
  title: string;
  subdomain: string;
  isPublished: boolean;
  theme?: {
    name: string;
    category: string;
  };
  customDomain?: {
    domainName: string;
    status: string;
  } | null;
}

export default function PortfoliosPage() {
  const [portfolios, setPortfolios] = React.useState<Portfolio[]>([]);
  const [filter, setFilter] = React.useState<"all" | "published" | "draft">("all");
  const [search, setSearch] = React.useState("");
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState("");
  const [newSubdomain, setNewSubdomain] = React.useState("");
  const [selectedTheme, setSelectedTheme] = React.useState("modern-dev");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const fetchPortfolios = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/portfolios");
      const json = await res.json();
      if (json.success && json.data) {
        setPortfolios(json.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newSubdomain.trim()) {
      toast.error("Please provide both title and subdomain");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/portfolios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workspaceId: "cmwhwjaf00001ozicgr1bo9vt", // Demo workspace
          themeId: selectedTheme,
          title: newTitle,
          subdomain: newSubdomain.toLowerCase().replace(/[^a-z0-9-]/g, ""),
        }),
      });

      const json = await res.json();
      if (json.success) {
        toast.success("Portfolio created successfully!", {
          description: `${newTitle} is ready for customization.`,
        });
        setCreateDialogOpen(false);
        setNewTitle("");
        setNewSubdomain("");
        fetchPortfolios();
      } else {
        toast.error(json.message || "Failed to create portfolio");
      }
    } catch {
      toast.error("Network error creating portfolio");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTogglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`http://localhost:5000/api/v1/portfolios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !currentStatus }),
      });
      const json = await res.json();
      if (json.success) {
        toast.success(
          !currentStatus ? "Portfolio published live!" : "Portfolio moved to draft"
        );
        fetchPortfolios();
      }
    } catch {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this portfolio?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/v1/portfolios/${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Portfolio deleted successfully");
        fetchPortfolios();
      }
    } catch {
      toast.error("Failed to delete portfolio");
    }
  };

  const filteredPortfolios = portfolios.filter((item) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "published" && item.isPublished) ||
      (filter === "draft" && !item.isPublished);
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subdomain.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#10291D] tracking-tight">
            Portfolio Websites
          </h1>
          <p className="text-xs text-gray-500">
            Create, customize, and publish your tenant websites.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/preview/creative-designer">
            <Button
              variant="outline"
              className="rounded-full border-gray-300 hover:border-[#136968] hover:text-[#136968] text-xs font-semibold h-10 px-4 gap-1.5 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#249492]" />
              <span>Theme Catalog</span>
            </Button>
          </Link>

          <Button
            onClick={() => setCreateDialogOpen(true)}
            className="rounded-full bg-[#136968] hover:bg-[#0c4a49] text-white font-bold text-xs gap-2 h-10 px-5 shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Portfolio</span>
          </Button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 bg-white rounded-2xl border border-[#d8e6db]">
        {/* Filter Pills */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === "all"
                ? "bg-[#136968] text-white"
                : "text-gray-600 hover:text-[#10291D] hover:bg-gray-100"
            }`}
          >
            All ({portfolios.length})
          </button>
          <button
            onClick={() => setFilter("published")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === "published"
                ? "bg-[#136968] text-white"
                : "text-gray-600 hover:text-[#10291D] hover:bg-gray-100"
            }`}
          >
            Published ({portfolios.filter((p) => p.isPublished).length})
          </button>
          <button
            onClick={() => setFilter("draft")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === "draft"
                ? "bg-[#136968] text-white"
                : "text-gray-600 hover:text-[#10291D] hover:bg-gray-100"
            }`}
          >
            Drafts ({portfolios.filter((p) => !p.isPublished).length})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search portfolios..."
            className="w-full sm:w-60 h-9 pl-9 pr-3 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-[#136968]"
          />
        </div>
      </div>

      {/* Grid of Portfolios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPortfolios.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white border border-[#d8e6db] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div>
              <div className="relative aspect-[16/10] bg-gray-100">
                <Image
                  src={
                    item.subdomain === "asmual"
                      ? "/images/Hero-right side image (3).jpg"
                      : "/images/Hero-right side image (2).jpg"
                  }
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-md ${
                      item.isPublished ? "bg-emerald-600" : "bg-amber-500"
                    }`}
                  >
                    {item.isPublished ? "PUBLISHED" : "DRAFT"}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-bold text-[#10291D] text-base truncate">{item.title}</h3>
                <p className="text-xs text-gray-500 font-mono">
                  {item.subdomain}.asportfolio.site
                </p>
                {item.customDomain && (
                  <p className="text-xs text-[#136968] font-mono font-bold flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    <span>{item.customDomain.domainName}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-gray-100 space-y-2 mt-2">
              <div className="flex items-center gap-2 pt-3">
                <Link href={`/p/${item.subdomain}`} target="_blank" className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl text-xs h-9 gap-1 font-semibold hover:border-[#136968] hover:text-[#136968] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Live</span>
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    toast.info(`Opening editor for ${item.title}`, {
                      description: "Visual builder loads customizer canvas.",
                    })
                  }
                  className="rounded-xl text-xs h-9 gap-1 font-semibold"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Editor</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleTogglePublish(item.id, item.isPublished)}
                  className={`rounded-xl text-xs h-9 font-semibold ${
                    item.isPublished
                      ? "text-amber-600 border-amber-200 hover:bg-amber-50"
                      : "text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  }`}
                >
                  {item.isPublished ? "Unpublish" : "Publish"}
                </Button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Portfolio Modal */}
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="sm:max-w-lg bg-white rounded-3xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#10291D]">
              Create New Portfolio
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500">
              Choose a theme and your dedicated platform subdomain.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreate} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#10291D]">Portfolio Title</label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Alex Rivera - Senior Designer"
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#136968]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#10291D]">Platform Subdomain</label>
              <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                <input
                  type="text"
                  required
                  value={newSubdomain}
                  onChange={(e) => setNewSubdomain(e.target.value.toLowerCase())}
                  placeholder="alex-design"
                  className="w-full h-11 px-3.5 bg-transparent text-sm focus:outline-none"
                />
                <span className="px-3 text-xs text-gray-400 font-mono">.asportfolio.site</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#10291D]">Select Theme</label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: "modern-dev", name: "Modern Developer" },
                  { id: "creative-designer", name: "Creative Designer" },
                  { id: "minimal-creator", name: "Minimal Creator" },
                  { id: "agency-portfolio", name: "Agency Studio" },
                ].map((th) => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => setSelectedTheme(th.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                      selectedTheme === th.id
                        ? "border-[#136968] bg-[#E8F4F4] text-[#136968]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {th.name}
                  </button>
                ))}
              </div>
            </div>

            <DialogFooter className="pt-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setCreateDialogOpen(false)}
                className="rounded-full text-xs"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#136968] hover:bg-[#0c4a49] text-white text-xs font-semibold px-6 transition-colors"
              >
                {isSubmitting ? "Creating..." : "Create Portfolio"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
