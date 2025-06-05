import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Coding = pgTable("codingQuestions", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  launguage: varchar("launguage", { length: 255 }).notNull(),
  details: varchar("details", { length: 255 }).notNull(),
  number: varchar("number", { length: 255 }).notNull(),
  createdBy: varchar("createdBy", { length: 255 }).notNull(),
  createdAt: varchar("createdAt", { length: 255 }).notNull(),
  mockId: varchar("mockId", { length: 255 }).notNull(),
});

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition", { length: 255 }).notNull(),
  jobDesc: varchar("jobDesc", { length: 255 }).notNull(),
  jobExperience: varchar("jobExperience", { length: 255 }).notNull(),
  createdBy: varchar("createdBy", { length: 255 }).notNull(),
  createdAt: varchar("createdAt", { length: 255 }).notNull(),
  mockId: varchar("mockId", { length: 255 }).notNull(),
});


export const UserAnswer = pgTable('userAnswer', {
  id:serial('id').primaryKey(),
  mockIdRef:varchar('mockId').notNull(),
  question:varchar('question').notNull(),
  correctAns:text('correctAns'),
  userAns:text('userAns'),
  feedback:text('feedback'),
  rating:varchar('rating'),
  createdAt:varchar('createdAt'),
  userEmail:varchar('userEmail'),
});