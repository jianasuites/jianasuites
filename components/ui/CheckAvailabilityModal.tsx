"use client";

import { useEffect, useState, useRef, type FormEvent } from "react";
import Link from "next/link";
import { X, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { formatToDisplay } from "@/lib/dates";

export interface BookingDetails {
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  children?: string;
}

interface CheckAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails?: BookingDetails;
}

export function CheckAvailabilityModal({
  isOpen,
  onClose,
  bookingDetails,
}: CheckAvailabilityModalProps) {
  const [guestName, setGuestName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Auto-focus the name input when modal opens
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setNameError("");
      setMobileError("");
      setIsSubmitting(false);
      setSubmitError(false);
      setSubmitErrorMessage("");
      setSubmitted(false);
      setGuestName("");
      setMobileNumber("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    let isValid = true;

    if (!guestName.trim()) {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    const trimmedMobile = mobileNumber.trim();
    // Exactly 10 numeric digits
    const isValidMobile = /^[0-9]{10}$/.test(trimmedMobile);

    if (!trimmedMobile) {
      setMobileError("Please enter your mobile number");
      isValid = false;
    } else if (!isValidMobile) {
      setMobileError("Please enter a valid 10-digit mobile number");
      isValid = false;
    } else {
      setMobileError("");
    }

    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitErrorMessage("");

    const name = guestName.trim();
    const phone = mobileNumber.trim();

    try {
      const inDisplay = formatToDisplay(bookingDetails?.checkIn);
      const outDisplay = formatToDisplay(bookingDetails?.checkOut);

      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: name,
          mobileNumber: phone,
          checkIn: inDisplay || "",
          checkOut: outDisplay || "",
          adults: bookingDetails?.adults || "",
          children: bookingDetails?.children || "",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        setSubmitErrorMessage(
          data?.details ||
            "Unable to submit request right now. Please check your connection or contact our front desk."
        );
        setSubmitError(true);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitErrorMessage(
        "Network connection error. Please try again or contact our front desk."
      );
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-h-[94vh] sm:max-h-[90vh] sm:max-w-lg bg-[var(--color-offwhite)] border-t sm:border border-charcoal/20 shadow-2xl rounded-t-2xl sm:rounded-sm p-6 sm:p-9 text-charcoal overflow-y-auto animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200"
      >
        {/* Close Button: Circular matching site icon button style */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white/95 hover:bg-white text-sage border border-charcoal/15 flex items-center justify-center transition-all hover:scale-105 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-sage z-10"
        >
          <X size={19} />
        </button>

        {!submitted ? (
          <div>
            {/* Eyebrow */}
            <p className="eyebrow text-sage text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none font-nav">
              RESERVATIONS
            </p>

            {/* Heading */}
            <h2
              id="modal-title"
              className="mt-3 font-display text-[2rem] sm:text-[2.25rem] font-normal leading-[1.15] text-sage"
            >
              Check Availability
            </h2>

            {/* Body copy */}
            <p className="mt-2 font-body text-[0.95rem] sm:text-[1.05rem] font-normal leading-[1.55] text-charcoal/85">
              Enter your details below and our reservations desk will verify suite
              availability and provide our best direct booking rates.
            </p>

            {/* Selected Booking Dates Badge if provided */}
            {(bookingDetails?.checkIn || bookingDetails?.checkOut) && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-sm bg-sage/10 px-3 py-1.5 text-xs font-nav text-sage border border-sage/15">
                <span className="font-semibold uppercase tracking-wider text-[0.65rem]">Dates:</span>
                <span>
                  {formatToDisplay(bookingDetails.checkIn) || "—"} to {formatToDisplay(bookingDetails.checkOut) || "—"}
                </span>
                {bookingDetails.adults && (
                  <span className="text-charcoal/70">
                    · {bookingDetails.adults} Adults
                    {bookingDetails.children && bookingDetails.children !== "0"
                      ? `, ${bookingDetails.children} Children`
                      : ""}
                  </span>
                )}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              {/* Guest Name Field */}
              <div className="text-left">
                <label
                  htmlFor="guestName"
                  className="block font-nav text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-sage mb-1.5"
                >
                  Guest Name <span className="text-red-700">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="guestName"
                  type="text"
                  name="guestName"
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    if (nameError) setNameError("");
                  }}
                  placeholder="e.g. Anand Kumar"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-charcoal/30 pb-2 pt-1 font-body text-base sm:text-lg text-charcoal placeholder:text-charcoal/35 placeholder:font-body focus:outline-none focus:border-sage transition-colors"
                />
                {nameError && (
                  <p className="mt-1 font-nav text-xs text-red-700 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {nameError}
                  </p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div className="text-left">
                <label
                  htmlFor="mobileNumber"
                  className="block font-nav text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-sage mb-1.5"
                >
                  Mobile Number <span className="text-red-700">*</span>
                </label>
                <input
                  id="mobileNumber"
                  type="tel"
                  inputMode="numeric"
                  name="mobileNumber"
                  value={mobileNumber}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  autoComplete="tel"
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setMobileNumber(digits);
                    if (mobileError) setMobileError("");
                  }}
                  onKeyDown={(e) => {
                    if (
                      [
                        "Backspace",
                        "Delete",
                        "Tab",
                        "Escape",
                        "Enter",
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown",
                        "Home",
                        "End",
                      ].includes(e.key) ||
                      e.ctrlKey ||
                      e.metaKey
                    ) {
                      return;
                    }
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault();
                      return;
                    }
                    const input = e.currentTarget;
                    const isReplacingSelection =
                      input.selectionStart !== null &&
                      input.selectionEnd !== null &&
                      input.selectionStart !== input.selectionEnd;
                    if (input.value.length >= 10 && !isReplacingSelection) {
                      e.preventDefault();
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pasteData = e.clipboardData.getData("text");
                    const digits = pasteData.replace(/\D/g, "");
                    if (!digits) return;
                    const input = e.currentTarget;
                    const start = input.selectionStart ?? mobileNumber.length;
                    const end = input.selectionEnd ?? mobileNumber.length;
                    const nextVal = (mobileNumber.slice(0, start) + digits + mobileNumber.slice(end))
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    setMobileNumber(nextVal);
                    if (mobileError) setMobileError("");
                  }}
                  placeholder="10-digit mobile number (e.g. 9876543210)"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-charcoal/30 pb-2 pt-1 font-body text-base sm:text-lg text-charcoal placeholder:text-charcoal/35 placeholder:font-body focus:outline-none focus:border-sage transition-colors"
                />
                {mobileError && (
                  <p className="mt-1 font-nav text-xs text-red-700 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {mobileError}
                  </p>
                )}
              </div>

              {/* Consent / legal fine print */}
              <div className="space-y-1.5 text-left">
                <p className="text-[0.7rem] leading-relaxed text-charcoal/60 font-body">
                  By submitting, you agree to our{" "}
                  <Link href="#" className="underline hover:text-sage transition-colors">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline hover:text-sage transition-colors">
                    Privacy Policy
                  </Link>
                  . We'll only use your details to contact you about your stay at Jiana Suites.
                </p>
                <p className="text-[0.7rem] leading-relaxed text-charcoal/60 font-body">
                  I agree to provide my name and mobile number to Jiana Suites and allow the reservations team to contact me regarding my enquiry.
                </p>
              </div>

              {submitError && (
                <div className="rounded-sm bg-red-50 border border-red-200 p-3 text-red-800 text-xs font-nav flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 text-red-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Unable to submit request</p>
                    <p className="mt-0.5 text-red-700 leading-relaxed">
                      {submitErrorMessage ||
                        "Please check your network connection or contact our front desk."}
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-lakeside w-full min-h-[46px] py-3.5 px-6 font-nav text-[0.75rem] font-bold tracking-[0.14em] uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Checking Availability...</span>
                    </>
                  ) : (
                    <span>Check Availability</span>
                  )}
                </button>
              </div>

              <p className="text-center font-body text-xs text-charcoal/60">
                Direct booking · Best rate guaranteed · No booking fees
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-4">
            <div className="mx-auto w-14 h-14 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-4 border border-sage/20">
              <CheckCircle2 size={32} />
            </div>

            <p className="eyebrow text-sage text-[0.7rem] sm:text-[0.75rem] font-semibold tracking-[0.2em] uppercase leading-none font-nav">
              REQUEST RECEIVED
            </p>

            <h2 className="mt-3 font-display text-[2rem] sm:text-[2.25rem] font-normal leading-[1.15] text-sage">
              Thank You, {guestName.trim()}!
            </h2>

            <p className="mt-3 font-body text-[1.05rem] sm:text-[1.15rem] font-normal leading-relaxed text-charcoal/85 max-w-md mx-auto">
              Our reservations team has received your request and will contact you at{" "}
              <span className="font-semibold text-charcoal">{mobileNumber.trim()}</span>{" "}
              shortly with confirmed suite options.
            </p>

            <div className="mt-8 flex justify-center items-center">
              <button
                type="button"
                onClick={onClose}
                className="btn-lakeside w-full sm:w-auto min-h-[44px] py-3 px-8 text-[0.75rem] font-bold tracking-[0.14em] uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
