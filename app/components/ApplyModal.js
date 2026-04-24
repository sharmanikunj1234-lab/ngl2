"use client";

import ApplyForm from "./ApplyForm";

export default function ApplyModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative z-10 max-w-md w-full mx-4">
        <ApplyForm />
      </div>
    </div>
  );
}