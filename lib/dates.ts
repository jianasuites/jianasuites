/**
 * Date validation and formatting utilities for Jiana Suites
 * Guarantees strict 4-digit years, DD-MM-YYYY format, and dynamic current-year range validation.
 */

/**
 * Returns today's date normalized to 00:00:00 local time
 */
export function getToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Returns a date offset by a given number of days from base
 */
export function addDays(base: Date, days: number): Date {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Returns exactly 1 year from the given date (dynamically calculated)
 */
export function getMaxBookingDate(base: Date = getToday()): Date {
  const d = new Date(base);
  d.setFullYear(d.getFullYear() + 1);
  d.setHours(23, 59, 59, 999);
  return d;
}

/**
 * Formats a Date object to HTML5 input date ISO format: YYYY-MM-DD
 * Uses local time components to prevent timezone shifts (e.g. IST UTC+5:30)
 */
export function formatToISO(d: Date): string {
  if (!(d instanceof Date) || isNaN(d.getTime())) return "";
  const year = d.getFullYear();
  // Ensure strictly 4 digits
  if (year < 1000 || year > 9999) return "";
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Formats a Date or date string to the required display format: DD-MM-YYYY
 * Strictly rejects any date that does not have a valid 4-digit year.
 */
export function formatToDisplay(input: Date | string | null | undefined): string {
  if (!input) return "";

  if (input instanceof Date) {
    if (isNaN(input.getTime())) return "";
    const year = input.getFullYear();
    if (year < 1000 || year > 9999) return "";
    const day = String(input.getDate()).padStart(2, "0");
    const month = String(input.getMonth() + 1).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }

  const str = String(input).trim();
  if (!str) return "";

  // Already DD-MM-YYYY with strictly 4-digit year
  const displayMatch = str.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  if (displayMatch) {
    const day = parseInt(displayMatch[1], 10);
    const month = parseInt(displayMatch[2], 10);
    const year = parseInt(displayMatch[3], 10);
    if (isValidDateParts(year, month, day)) {
      return str;
    }
    return "";
  }

  // YYYY-MM-DD with strictly 4-digit year
  const isoMatch = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const year = parseInt(isoMatch[1], 10);
    const month = parseInt(isoMatch[2], 10);
    const day = parseInt(isoMatch[3], 10);
    if (isValidDateParts(year, month, day)) {
      return `${isoMatch[3]}-${isoMatch[2]}-${isoMatch[1]}`;
    }
    return "";
  }

  // Any non-standard format (2-digit years, 5+ digit years, non-delimited) is rejected
  return "";
}

/**
 * Checks if year, month (1-12), day are calendar-valid without overflow
 */
function isValidDateParts(year: number, month: number, day: number): boolean {
  if (year < 1000 || year > 9999) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;
  const d = new Date(year, month - 1, day);
  return (
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
}

/**
 * Strictly parses a date string in YYYY-MM-DD or DD-MM-YYYY format (or Date object) into a Date object.
 * Returns null if the year is not exactly 4 digits or the date is invalid.
 */
export function parseDateStrict(input: Date | string | null | undefined): Date | null {
  if (!input) return null;

  if (input instanceof Date) {
    if (isNaN(input.getTime())) return null;
    const year = input.getFullYear();
    if (year < 1000 || year > 9999) return null;
    const d = new Date(input);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  const trimmed = String(input).trim();

  // Reject malformed year lengths (5+ digits or < 4 digits)
  if (/^\d{5,}/.test(trimmed) || /-\d{5,}$/.test(trimmed)) {
    return null;
  }

  let year: number;
  let month: number;
  let day: number;

  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    year = parseInt(isoMatch[1], 10);
    month = parseInt(isoMatch[2], 10);
    day = parseInt(isoMatch[3], 10);
  } else {
    const displayMatch = trimmed.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (displayMatch) {
      day = parseInt(displayMatch[1], 10);
      month = parseInt(displayMatch[2], 10);
      year = parseInt(displayMatch[3], 10);
    } else {
      return null;
    }
  }

  if (!isValidDateParts(year, month, day)) {
    return null;
  }

  const d = new Date(year, month - 1, day);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Input-level sanitizer to prevent typing more than 4 year digits in native date inputs.
 * If user pastes or types a 5+ digit year, clamps the year to 4 digits or maxYear.
 */
export function sanitizeDateInputValue(value: string): string {
  if (!value) return "";
  const parts = value.split("-");
  if (parts.length === 3) {
    const [yearStr, monthStr, dayStr] = parts;
    if (yearStr.length > 4) {
      const truncatedYear = yearStr.slice(0, 4);
      return `${truncatedYear}-${monthStr}-${dayStr}`;
    }
  }
  return value;
}

export interface DateValidationResult {
  isValid: boolean;
  error?: string;
  checkInISO?: string;
  checkOutISO?: string;
  checkInDisplay?: string;
  checkOutDisplay?: string;
}

/**
 * Validates check-in and check-out booking dates according to all business rules:
 * - Both dates required and must have exactly 4 digits for the year
 * - Check-in cannot be before today
 * - Check-in cannot be more than 1 year from today
 * - Check-out must be after check-in
 * - Check-out cannot be more than 1 year from today
 */
export function validateBookingDates(
  checkInRaw: Date | string | null | undefined,
  checkOutRaw: Date | string | null | undefined
): DateValidationResult {
  if (!checkInRaw || (typeof checkInRaw === "string" && !checkInRaw.trim())) {
    return { isValid: false, error: "Please select a check-in date." };
  }
  if (!checkOutRaw || (typeof checkOutRaw === "string" && !checkOutRaw.trim())) {
    return { isValid: false, error: "Please select a check-out date." };
  }

  // Reject malformed 5+ digit years immediately if strings
  if (typeof checkInRaw === "string" && /^\d{5,}/.test(checkInRaw.trim())) {
    return {
      isValid: false,
      error: "Invalid check-in date. Year must have exactly 4 digits.",
    };
  }
  if (typeof checkOutRaw === "string" && /^\d{5,}/.test(checkOutRaw.trim())) {
    return {
      isValid: false,
      error: "Invalid check-out date. Year must have exactly 4 digits.",
    };
  }

  const checkInDate = parseDateStrict(checkInRaw);
  if (!checkInDate) {
    return {
      isValid: false,
      error: "Please enter a valid check-in date (DD-MM-YYYY) with a 4-digit year.",
    };
  }

  const checkOutDate = parseDateStrict(checkOutRaw);
  if (!checkOutDate) {
    return {
      isValid: false,
      error: "Please enter a valid check-out date (DD-MM-YYYY) with a 4-digit year.",
    };
  }

  const today = getToday();
  const maxDate = getMaxBookingDate(today);

  // Check-in cannot be before today
  if (checkInDate.getTime() < today.getTime()) {
    return {
      isValid: false,
      error: "Check-in date cannot be in the past.",
    };
  }

  // Check-in cannot be more than 1 year from today
  if (checkInDate.getTime() > maxDate.getTime()) {
    return {
      isValid: false,
      error: "Check-in date cannot be more than 1 year from today.",
    };
  }

  // Check-out cannot be before or equal to check-in
  if (checkOutDate.getTime() <= checkInDate.getTime()) {
    return {
      isValid: false,
      error: "Check-out date must be after your check-in date.",
    };
  }

  // Check-out cannot be more than 1 year from today
  if (checkOutDate.getTime() > maxDate.getTime()) {
    return {
      isValid: false,
      error: "Check-out date cannot be more than 1 year from today.",
    };
  }

  return {
    isValid: true,
    checkInISO: formatToISO(checkInDate),
    checkOutISO: formatToISO(checkOutDate),
    checkInDisplay: formatToDisplay(checkInDate),
    checkOutDisplay: formatToDisplay(checkOutDate),
  };
}
