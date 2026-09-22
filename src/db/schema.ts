/**
 * GLOBIZHUB DATABASE SCHEMA (Drizzle ORM)
 * Based on Globizhub.com Technical Architecture and Product Blueprint (Section 4)
 */

import { pgTable, text, timestamp, uuid, varchar, integer, boolean, jsonb } from "drizzle-orm/pg-core";

// 1. Users & Identity
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  avatarUrl: text("avatar_url"),
  role: varchar("role", { length: 50 }).default("client").notNull(), // 'admin', 'staff', 'client'
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 2. Organizations
export const organisations = pgTable("organisations", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  domain: varchar("domain", { length: 255 }),
  tier: varchar("tier", { length: 50 }).default("standard").notNull(), // 'startup', 'midmarket', 'enterprise'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 3. Leads & CRM Pipeline
export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  contactName: varchar("contact_name", { length: 255 }).notNull(),
  contactEmail: varchar("contact_email", { length: 255 }).notNull(),
  companyName: varchar("company_name", { length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 50 }),
  objective: varchar("objective", { length: 255 }).notNull(), // 'AI & Autonomous Agents', 'Custom Platform', etc.
  scope: varchar("scope", { length: 255 }).notNull(), // 'Greenfield', 'Modernization', etc.
  budgetRange: varchar("budget_range", { length: 100 }), // '$50k - $100k', etc.
  timeline: varchar("timeline", { length: 100 }),
  projectBrief: text("project_brief"),
  status: varchar("status", { length: 50 }).default("new").notNull(), // 'new', 'qualified', 'proposal_sent', 'closed_won', 'closed_lost'
  assignedTo: uuid("assigned_to").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 4. Proposals & Contracts
export const proposals = pgTable("proposals", {
  id: uuid("id").defaultRandom().primaryKey(),
  leadId: uuid("lead_id").references(() => leads.id),
  organisationId: uuid("organisation_id").references(() => organisations.id),
  title: varchar("title", { length: 255 }).notNull(),
  estimatedValueUsd: integer("estimated_value_usd"),
  status: varchar("status", { length: 50 }).default("draft").notNull(), // 'draft', 'in_review', 'sent', 'accepted', 'rejected'
  s3DocumentKey: text("s3_document_key"),
  validUntil: timestamp("valid_until"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 5. Projects & Delivery Milestones
export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  organisationId: uuid("organisation_id").references(() => organisations.id).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).default("discovery").notNull(), // 'discovery', 'in_progress', 'qa', 'live', 'maintenance'
  leadArchitectId: uuid("lead_architect_id").references(() => users.id),
  kickoffDate: timestamp("kickoff_date"),
  targetLaunchDate: timestamp("target_launch_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projectMilestones = pgTable("project_milestones", {
  id: uuid("id").defaultRandom().primaryKey(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  stageNumber: integer("stage_number").notNull(), // 1 to 5
  status: varchar("status", { length: 50 }).default("pending").notNull(), // 'pending', 'in_progress', 'completed'
  dueDate: timestamp("due_date"),
  completedAt: timestamp("completed_at"),
});

// 6. Support Tickets
export const supportTickets = pgTable("support_tickets", {
  id: uuid("id").defaultRandom().primaryKey(),
  projectId: uuid("project_id").references(() => projects.id),
  submittedBy: uuid("submitted_by").references(() => users.id).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  severity: varchar("severity", { length: 50 }).default("medium").notNull(), // 'low', 'medium', 'high', 'critical'
  status: varchar("status", { length: 50 }).default("open").notNull(), // 'open', 'in_investigation', 'resolved', 'closed'
  slaDeadline: timestamp("sla_deadline"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
