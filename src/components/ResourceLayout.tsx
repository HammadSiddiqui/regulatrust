import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ResourceLayoutProps {
  title: string;
  intro: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaTarget?: string;
}

const ResourceLayout: React.FC<ResourceLayoutProps> = ({ 
  title, 
  intro, 
  children,
  ctaText = "Join the Waitlist",
  ctaTarget = "/#product"
}) => {
  // Ensure we start at the top of the page when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white border-b border-grey">
        <div className="container">
          <div className="max-w-3xl">
            <Link 
              to="/" 
              className="inline-flex items-center text-xs font-black uppercase tracking-widest text-charcoal/40 hover:text-black mb-6 transition-colors"
            >
              <ArrowRight className="w-3 h-3 mr-2 rotate-180" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tighter uppercase">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-charcoal/60 font-medium leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none 
                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:mb-6
                prose-h2:text-3xl prose-h2:mt-16
                prose-p:text-charcoal/70 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:list-none prose-ul:pl-0 prose-ul:mb-8
                prose-li:flex prose-li:items-start prose-li:gap-3 prose-li:mb-4 prose-li:text-charcoal/70
              ">
                {children}
              </div>
              
              {/* How RegulaTrust Helps */}
              <div className="mt-20 p-8 md:p-12 bg-lime rounded-sm border border-black shadow-2xl shadow-lime/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 size={120} strokeWidth={1} />
                </div>
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-4 text-black">
                    How RegulaTrust Helps
                  </h2>
                  <p className="text-black/70 font-bold leading-relaxed mb-8">
                    RegulaTrust provides an automated Trust Center platform that replaces static PDF sharing and manually updated subprocessor lists with a real-time, high-fidelity security posture portal.
                  </p>
                  <a href={ctaTarget} className="btn btn-secondary">
                    {ctaText}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar / Related Resources */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-white border border-grey rounded-sm sticky top-32">
                <h3 className="text-xs font-black uppercase tracking-widest text-charcoal/40 mb-6">
                  Resources
                </h3>
                <nav className="flex flex-col gap-4">
                  {[
                    { title: "What Is a Trust Center", path: "/resources/what-is-a-trust-center" },
                    { title: "Trust Center for SaaS", path: "/resources/trust-center-for-saas" },
                    { title: "Sharing SOC 2 Reports", path: "/resources/share-soc2-with-customers" },
                    { title: "Responding to Questionnaires", path: "/resources/security-questionnaires" },
                    { title: "Subprocessor Transparency", path: "/resources/subprocessor-transparency" }
                  ].map((resource) => (
                    <Link 
                      key={resource.path}
                      to={resource.path}
                      className="group flex items-center justify-between p-4 bg-off-white hover:bg-black hover:text-white transition-all duration-300 rounded-sm border border-transparent hover:border-black"
                    >
                      <span className="text-sm font-bold leading-snug">{resource.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-grey">
                  <p className="text-xs font-bold text-charcoal/40 mb-4">
                    Ready to modernize your security reviews?
                  </p>
                  <a href="/#product" className="btn btn-primary w-full">Join the Waitlist</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceLayout;
