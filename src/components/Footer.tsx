import React from 'react'
import { Code2 } from 'lucide-react'
export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-spider-red" />
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Ashish<span className="text-spider-red">.</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ashish Yadav. All rights reserved.
        </p>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          Built with <span className="text-spider-red">♥</span> & React
        </div>
      </div>
    </footer>
  )
}
