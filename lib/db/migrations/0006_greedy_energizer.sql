ALTER TABLE "Message_v2" ADD COLUMN "language" varchar(5);--> statement-breakpoint
ALTER TABLE "Message_v2" ADD COLUMN "emotionalAnalysis" json;--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "persona" varchar(32) DEFAULT 'Mentor';--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "preferredLanguage" varchar(5) DEFAULT 'en';--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "isPremium" boolean DEFAULT false;