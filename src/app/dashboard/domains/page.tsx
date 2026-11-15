"use client";

import * as React from "react";
import {
  Globe,
  Plus,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Trash2,
  Sparkles,
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

interface DomainRecord {
  id: string;
  domainName: string;
  status: string;
  sslActive: boolean;
  dnsTxtRecord: string | null;
  portfolio: {
    id: string;
    title: string;
    subdomain: string;
  };
}

export default function DomainsPage() {
  const [domains, setDomains] = React.useState<DomainRecord[]>([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [domainInput, setDomainInput] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const fetchDomains = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/domains");
      const json = await res.json();
      if (json.success && json.data) {
        setDomains(json.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    fetchDomains();
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const handleAddDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) {
      toast.error("Please enter a domain name");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/domains", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          portfolioId: "cmwhwjba80007ozicb11r5412", // Default demo portfolio
          domainName: domainInput.trim().toLowerCase(),
        }),
      });

      const json = await res.json();
      if (json.success) {
        toast.success("Domain connected successfully!", {
          description: "SSL certificate provisioned automatically.",
        });
        setDialogOpen(false);
        setDomainInput("");
        fetchDomains();
      } else {
        toast.error(json.message || "Failed to connect domain");
      }
    } catch {
      toast.error("Error connecting custom domain");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemove = async (id: string) => {
    if (!confirm("Are you sure you want to remove this domain?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/v1/domains/${id}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Domain removed");
        fetchDomains();
      }
    } catch {
      toast.error("Failed to delete domain");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-[#10291D] tracking-tight">
            Custom Domains & SSL
          </h1>
          <p className="text-xs text-gray-500">
            Connect your own apex domain or subdomains with automatic SSL provisioning.
          </p>
        </div>

        <Button
          onClick={() => setDialogOpen(true)}
          className="rounded-full bg-[#136968] hover:bg-[#0c4a49] text-white font-bold text-xs gap-2 h-10 px-5 shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Connect Domain</span>
        </Button>
      </div>

      {/* DNS Configuration Guide Card */}
      <div className="p-6 rounded-3xl bg-white border border-[#B8DFDF] shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#E8F4F4] text-[#136968] flex items-center justify-center">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#10291D]">
              DNS Configuration Instructions
            </h3>
            <p className="text-xs text-gray-500">
              Add the following records at your DNS provider (Cloudflare, Namecheap, GoDaddy):
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* CNAME Record */}
          <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-100 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#10291D]">Type: CNAME</span>
              <button
                onClick={() => handleCopy("cname.asportfolio.site")}
                className="text-gray-400 hover:text-[#136968] flex items-center gap-1 text-[11px]"
              >
                <Copy className="w-3 h-3" />
                <span>Copy Value</span>
              </button>
            </div>
            <div className="text-xs font-mono text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200">
              Host: <span className="text-[#136968] font-bold">@</span> or <span className="text-[#136968] font-bold">portfolio</span>
              <br />
              Target: <span className="text-[#136968] font-bold">cname.asportfolio.site</span>
            </div>
          </div>

          {/* TXT Verification */}
          <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-100 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#10291D]">Type: TXT (Ownership Check)</span>
              <button
                onClick={() => handleCopy("as-verify-platform-auth")}
                className="text-gray-400 hover:text-[#136968] flex items-center gap-1 text-[11px]"
              >
                <Copy className="w-3 h-3" />
                <span>Copy Value</span>
              </button>
            </div>
            <div className="text-xs font-mono text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200">
              Host: <span className="text-[#136968] font-bold">_as-verify</span>
              <br />
              Value: <span className="text-[#136968] font-bold">as-verify-platform-auth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Domains Table */}
      <div className="rounded-3xl bg-white border border-[#d8e6db] shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-[#10291D]">Connected Custom Domains</h2>
        </div>

        {domains.length === 0 ? (
          <div className="p-12 text-center text-xs text-gray-400">
            No custom domains connected yet. Click &quot;Connect Domain&quot; to add one.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {domains.map((item) => (
              <div
                key={item.id}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F4F4] text-[#136968] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#10291D] font-mono">
                        {item.domainName}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {item.status}
                      </span>
                      {item.sslActive && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
                          SSL ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Target: {item.portfolio?.title || "Portfolio"} ({item.portfolio?.subdomain}.asportfolio.site)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                    title="Disconnect domain"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Connect Domain Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white rounded-3xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#10291D]">
              Connect Custom Domain
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500">
              Enter your domain name (e.g., example.com or portfolio.yourname.com)
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddDomain} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#10291D]">Domain Name</label>
              <input
                type="text"
                required
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="e.g. yourname.com"
                className="w-full h-11 px-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#136968]"
              />
            </div>

            <DialogFooter className="pt-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setDialogOpen(false)}
                className="rounded-full text-xs"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#136968] hover:bg-[#0c4a49] text-white text-xs font-semibold px-6 transition-colors"
              >
                {isSubmitting ? "Connecting..." : "Verify & Connect"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
