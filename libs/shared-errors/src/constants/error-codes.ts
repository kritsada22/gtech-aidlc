/**
 * Domain-specific error codes for the Autoflow system.
 * Used in DomainException to identify specific business rule violations.
 */
export const ErrorCodes = {
  /** Stock quantity would go negative after this operation */
  STOCK_NEGATIVE: 'STOCK_NEGATIVE',

  /** The target accounting period is locked and cannot accept new postings */
  PERIOD_LOCKED: 'PERIOD_LOCKED',

  /** Transaction is immutable and cannot be modified after POST */
  TX_IMMUTABLE: 'TX_IMMUTABLE',

  /** Reference chain between transactions is invalid or broken */
  REF_CHAIN_INVALID: 'REF_CHAIN_INVALID',

  /** Operation requires approval from a higher-level role */
  APPROVAL_REQUIRED: 'APPROVAL_REQUIRED',

  /** An invoice with this number already exists */
  DUPLICATE_INVOICE: 'DUPLICATE_INVOICE',

  /** User does not have the required role for this operation */
  INSUFFICIENT_ROLE: 'INSUFFICIENT_ROLE',

  /** CN_RETURN has non-zero inventory fields (qty or totalCost) */
  CN_RETURN_INVENTORY: 'CN_RETURN_INVENTORY',

  /** INVOICE_FROM_DO has non-zero stock/AR fields */
  INVOICE_FROM_DO_STOCK: 'INVOICE_FROM_DO_STOCK',

  /** Alert validation failed — one or more ERROR rules violated */
  ALERT_VALIDATION_FAILED: 'ALERT_VALIDATION_FAILED',
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
